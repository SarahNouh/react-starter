/**
 * @Author: sarah
 * @Date:   2019-07-31T15:31:01+02:00
 * @Last modified by:   sarah
 * @Last modified time: 2019-07-31T16:32:28+02:00
 */
import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/homepage/homepage";
import UserPage from "../../pages/userpage/userpage";
class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/user/:id" component={UserPage} />
        </Switch>
      </main>
    );
  }
}

export default Main;
