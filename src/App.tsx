/**
 * @Author: sarah
 * @Date:   2019-07-31T15:19:20+02:00
 * @Last modified by:   sarah
 * @Last modified time: 2019-07-31T16:11:41+02:00
 */

import React from "react";
import "./App.css";
import Main from "./components/main/main";
import Header from "./components/header/header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
