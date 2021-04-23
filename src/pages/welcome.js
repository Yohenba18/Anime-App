import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchContext } from "../context/search";
import "./welcome.scss";
import { Grid, FormControl, Input, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Welcome = () => {
  const history = useHistory();
  const search = useContext(SearchContext);
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((data) => {
      search.setData(data.results);
      console.log(data.results);
      localStorage.setItem("myData", JSON.stringify(data.results));
      history.push("/Result");
    });
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
          <FormControl type="submit" className="search__control">
            <IconButton
              className="search__inputButton"
              variant="contained"
              color="primary"
              type="submit"
              disabled={!input}
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
            <Input
            placeholder="Search for you favorite anime..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
              className="search__input"
              
            />
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};

export default Welcome;
