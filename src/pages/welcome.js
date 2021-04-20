import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/search";
import "./welcome.scss";
import { Grid, FormControl, Input, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Welcome = () => {
  const search = useContext(SearchContext);
  const [input, setInput] = useState("");

  useEffect(() => {
    search.search("Naruto").then((data) => console.log(data));
  }, [search]);

  return (
    <div className="welcome">
      <div className="welcome__elements">
        <h1>WEEB ZONE</h1>
        <Grid
          container
          direction="column"
          justify="center"
          alignContent="center"
          alignItem="center"
        >
          <Grid item>
            <form>
              <FormControl type="submit">
                <Input
                  placeholder="Anime search...."
                  value={input}
                  onClick={}
                />
                <IconButton
                  varient="contained"
                  type="submit"
                  disable={!input}
                  onClick={handleSearch}
                >
                  <SearchIcon />
                </IconButton>
              </FormControl>
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Welcome;
