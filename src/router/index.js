import React, { useEffect } from 'react';
import { Switch, Route} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { pageRoutes } from 'constants/nav-routes';

const Main = () => {
  
  return (
    <main className="main-content">
      <ScrollToTop>
        <Switch>
          {pageRoutes.map((props) => {
            return (
              <Route {...props} />
            )
          })}
        </Switch>
      </ScrollToTop>
    </main>
  )
}

export default Main;
