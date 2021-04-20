import React, { useContext, useEffect } from "react";
import { SearchContext } from "../context/search";
import "./welcome.scss";

const Welcome = () => {
  const search = useContext(SearchContext);

  useEffect(() => {
    search.search("Naruto").then((data) => console.log(data));
  }, [search]);

  return (
    <div className="welcome">
      <div className="welcome__elements">
        <h1>WEEB ZONE</h1>
      </div>
    </div>
  );
};

export default Welcome;
