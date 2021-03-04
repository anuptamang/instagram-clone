import ReactPixel from "react-facebook-pixel";

class EventTracking {
  /** Page names that are identified in the analytics application. */
  BREED_PAGE   = 'Breed';
  BREEDS_PAGE  = 'Breeds';
  RECIPE_PAGE  = 'Recipe';
  RECIPES_PAGE = 'Recipes';
  RATED_PAGE   = 'Rated';
  RECOS_PAGE   = 'Recos';
  FOOD_PAGE    = 'Food';

  constructor() {
    let env = process.env.REACT_APP_PIXEL_ENV;
    this.is_prod = env === 'production';
    this.is_test = env === 'test';
    this.gtagID  = process.env.REACT_APP_GA_TRACKING_ID || undefined;
    this.pixelID = process.env.REACT_APP_FB_PIXEL_ID    || undefined;
    this.use_ga  = false;
    this.use_fb  = false;
    this.timestamp = 0;
    this.delta     = 0;

    if (this.is_prod || this.is_test) {
      console.log(`Event tracking enabled for ${env}`);
      // FB ------------------------------------
      if (this.pixelID) {
        this._initFB();
        this.use_fb = true;
      } else {
        console.log('FB Pixel disabled. No pixel ID')
      }
      // GA ------------------------------------
      if (this.gtagID) {
        this._initGA();
        this.use_ga = true;
      } else {
        console.log('GA Tracking disabled. No tracking ID')
      }
    } else {
      // don't muddy up the statistics with the developers' events
      console.log(`All event tracking is disabled in ${env}`)
    }
  }
  _initFB() {
    console.log(`FB pixel configured ${this.is_test?"with":"without"} debug logs`)
    ReactPixel.init(this.pixelID, null, {
      debug: this.is_test,
      autoConfig: true
    });
  }
  _initGA() {
    let ts = new Date();
    console.log(`GA tracking configured with timestamp: ${ts}`)

    // global configs
    window.gtag('js', ts);
    window.gtag('config', this.gtagID);
  }

  /**
   * Very rudimentary event timer that records the delta time since a previous event was triggered.
   * Could be useful in certain sequences of events, in others it wouldn't apply.
   *
   * @returns {number} milliseconds
   */
  resetTimer() {
    // only count timer events after an initial timestamp has been established
    if (this.timestamp !== 0) {
      this.delta = Date.now() - this.timestamp;
    }
    this.timestamp = Date.now();
    return this.delta
  }

  /**
   * Careful to not set delta when data isn't being sent as part of the event, or this is
   * the first event to get triggered and therefore doesn't have context to previous.
   *
   * @param evtData
   * @returns {*}
   */
  addDelta(evtData) {
    return (evtData && this.delta !== 0) ? {evtData, delta_ms: this.delta} : evtData;
  }

  /**
   * Automatically triggered from a history change event.
   *
   * @param {string} path URL path, no parameters
   */
  pageView(path) {
    this.resetTimer();
    console.log('You changed the page to: '+  path);
    this._sendFBEvent('PageView');
    this._sendGAEvent('page_view');
  }

  /**
   * External request to an SN API.
   *
   * @param {EventTracking.PAGE} pageName Enumerated name of page making the request.
   * @param {string} path_params URL path parameters.
   */
  apiRequest(pageName, path_params) {
    this.resetTimer();
    this._sendFBEvent('Search', {
      content_category: pageName, search_string: path_params
    });
    this._sendGAEvent('sn_search', `${pageName}_request`,
        'search_term', path_params)
  }

  /**
   * Update to API request parameters, usually made from user selectable filters.
   *
   * @param {EventTracking.PAGE} pageName Enumerated name of page updating params.
   * @param {string} pName Parameter name.
   * @param {object} pValue Parameter value. Can be any native type or JSON-like hashmap.
   */
  paramsUpdate(pageName, pName, pValue) {
    this.resetTimer();
    let ss = `${pName}=${pValue}`;
    this._sendFBEvent('CustomizeSearch', {
      content_category: pageName, search_string: ss
    });
    this._sendGAEvent('customize', `${pageName}_search`,
        pName, pValue)
  }

  /**
   * User click on an item they're interested in such as a pet or recipe.
   *
   * @param {Object} props Recipe details
   */
  selectRecipe(props) {
    this.resetTimer();
    // careful to not modify props param. make copy.
    let evtData = Object.assign({}, props);
    // cleanup to make easier to view in dashboard
    for (const pName of ['_id', 'image', 'created_at', 'updated_at', 'tag']) {
      delete evtData[pName]
    }
    this._sendFBEvent('SelectRecipe', evtData);
    this._sendGAEvent('select_recipe', 'engagement',
        `${props['brand']}: ${props['formula']}`,
        parseInt(props['product_number']),
        evtData)
  }

  /**
   * User clicked to view ingredients for a recipe associated with a breed
   * @param grps_ingrs_toggle True when food groups is selected, false when ingr list is selected
   */
  recipeIngrs(grps_ingrs_toggle) {
    this.resetTimer();
    const label =  grps_ingrs_toggle ? 'Top Food Groups' : 'List of Ingredients';
    this._sendFBEvent('RecipeIngrs', {'selection': label});
    this._sendGAEvent('recipe_ingrs', 'recipe', label);
  }

  /**
   * Main reason for breaking this out to a method is to ensure the 'use' flag gets checked.
   * @private
   */
  _sendFBEvent(evtName, evtData) {
    evtData = this.addDelta(evtData);
    // test takes priority
    if (this.is_test) {
      console.log('TEST FB Event:',evtName,', data:',evtData)
    }
    else if (this.use_fb) {
      ReactPixel.track(evtName, evtData);
    }
  }
  /**
   * Main reason for breaking this out to a method is to ensure the 'use' flag gets checked.
   * @private
   */
  _sendGAEvent(action, category, label=null, value=null, customData=null) {
    // build GA compatible event data
    let evtData = customData || {};
    if (typeof(category) === 'string') { evtData.event_category = category }
    if (typeof(label)    === 'string') { evtData.event_label = label }
    if (typeof(value)    === 'number'||
        typeof(value)    === 'string') { evtData[label] = value }
    // add delta time since last event
    evtData = this.addDelta(evtData);

    // don't send empty object. null is more appropriate
    evtData = Object.keys(evtData).length === 0 ? null : evtData;
    // test takes priority
    if (this.is_test) {
      console.log('TEST GA Event:',action, ', data:',evtData)
    }
    else if (this.use_ga) {
      window.gtag('event', action, evtData);
    }
  }
}

const EventTracker = new EventTracking();
export default EventTracker;
