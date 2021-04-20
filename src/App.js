import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Welcome from "./pages/welcome";
import Result from "./pages/result";
import Moreinfo from "./pages/moreinfo";
import Topnav from "./components/Topnav";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [singleDate, setSingleData] = useState({});

  const setData = (data) => {
    setAnimeData(data);
  };
  const setSingle = (data) => {
    setSingle(data);
  };

  const search = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchTerm}&limit=20`
    ).then(resp => resp.json())
  };
  return (
    <Router>
      <Topnav />
      <main>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/Result" exact>
            <Result />
          </Route>
          <Route path="/MoreInfo" exact>
            <Moreinfo />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
