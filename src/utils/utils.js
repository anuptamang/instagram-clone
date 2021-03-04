export const prepareQueryParams = (reqData) => (
  Object.keys(reqData).map(key => {
    if (reqData[key] !== '') {
      return encodeURIComponent(key) + '=' + encodeURIComponent(reqData[key])
    } else {
      return encodeURIComponent(key)
    }
  }).join('&')
);

export const removeEmptyProp = (obj, prop) => {
  let newObj = Object.assign({}, obj);
  if (newObj[prop] === '') {
    delete newObj[prop];
  }
  return newObj;
}

export const removeAllEmptyProp = (obj) => {
  let newObj = Object.assign({}, obj);
  for(var key in newObj) {
    if(newObj[key] === '') {
       delete newObj[key]
    }
  }
  return newObj;
}

export const createMarkup = (tags) => {
  return {__html: tags};
}

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
