import React, { useContext } from "react";
import { SearchContext } from "../context/search";
import "./welcome.scss";

function Welcome() {
  const search = useContext(SearchContext);

  return (
    <div className="welcome">
      <div className="welcome__elements">
        <h1>WEEB ZONE</h1>
      </div>
    </div>
  );
}

export default Welcome;
