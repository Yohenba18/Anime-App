import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/search";
import "./welcome.scss";
import { Grid, FormControl, Input, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Welcome = () => {
  const search = useContext(SearchContext);
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((data) => console.log(data));
  };
  return (
        <Grid
        className="welcome"
          container
          direction="column"
          justify="center"
          alignContent="center"
          alignItem="center"
        >
        <h1>WEEB ZONE</h1>
          <Grid item>
            <form className="search">
              <FormControl type="submit" className="search__control" >
              <IconButton
                  varient="contained"
                  type="submit"
                  className="search__inputButton"
                  disable={!input}
                  onClick={handleSearch}
                >
                  <SearchIcon />
                </IconButton>
                <Input
                  placeholder="Anime search...."
                  value={input}
                  className="search__input"
                  onChange={(event) => setInput(event.target.value)}
                />

              </FormControl>
            </form>
          </Grid>
        </Grid>

  );
};

export default Welcome;
