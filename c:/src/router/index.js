import { pageRoutes } from 'constants/nav-routes';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

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
