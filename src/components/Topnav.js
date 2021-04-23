import React, { useContext, useEffect, useState } from "react";
import "./TopNav.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router";
import { SearchContext } from "../context/search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const search = useContext(SearchContext);
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    search.search(input).then((data) => {
      search.setData(data.results);
      console.log(data);
      localStorage.setItem("myData", JSON.stringify(data.results));
      setInput(" ");
      history.push("/Result");
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" id="appbar">
        <Toolbar>
          <Typography className={classes.title} variant="h4" noWrap id="title">
            <a href="../pages/welcome.js">WEEB ZONE</a>
          </Typography>
          <form className={classes.search} onSubmit={handleSearch}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Anime.."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
}
