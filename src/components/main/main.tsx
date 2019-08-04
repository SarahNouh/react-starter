/**
 * @Author: sarah
 * @Date:   2019-07-31T15:31:01+02:00
 * @Last modified by:   sarah
 * @Last modified time: 2019-08-04T15:02:51+02:00
 */

import HomePage from "../../pages/home-page/home-page";
import React from "react";
import { Switch, Route } from "react-router-dom";
import UserPage from "../../pages/user-page/user-page";

/**
 *This component represents the main component  that contains all our pages with all the respective routes
 *
 */
class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users/:id" component={UserPage} />
        </Switch>
      </main>
    );
  }
}

export default Main;
