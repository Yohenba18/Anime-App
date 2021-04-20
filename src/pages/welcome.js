import React, { useContext, useEffect } from "react";
import { SearchContext } from "../context/search";
import "./welcome.scss";
import {Grid, FormControl, Input, IconButton} from "@material-ui/core"

const Welcome = () => {
  const search = useContext(SearchContext);

  useEffect(() => {
    search.search("Naruto").then((data) => console.log(data));
  }, [search]);

  return (
    <div className="welcome">
      <div className="welcome__elements">
        <h1>WEEB ZONE</h1>
        <Grid container direction="column" justify="center" alignContent = "center" alignItem="center">
          <Grid item>
          Search
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Welcome;
