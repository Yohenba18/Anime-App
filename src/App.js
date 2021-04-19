import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from './pages/welcome';
import Result from './pages/result';
import Moreinfo from './pages/moreinfo';

function App() {
  return (
    <div className="App">
      <Welcome/>

    </div>
  );
}

export default App;
