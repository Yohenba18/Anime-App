import InputBase from "@material-ui/core/InputBase";
// import TextField from "@material-ui/core/TextField";
import React from "react";
import "./welcome.scss";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: "30px",
    backgroundColor: fade("#FF3333", 0.45),
    "&:hover": {
      backgroundColor: fade("#FF3333", 0.65),
    },
    marginLeft: 0,
    width: "536px",
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

function Welcome() {
  const classes = useStyles();
  return (
    <div className="welcome">
      <h1>WEEB ZONE</h1>
      <div className={classes.search}>
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
          id="#outlined-basic"
        />
        
      </div>
    </div>
  );
}

export default Welcome;
