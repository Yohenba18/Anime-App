import { TextField } from "@material-ui/core";
import React from "react";
import "./welcome.scss";

function Welcome() {

  return (
    <div>
      <h1>WEEB ZONE</h1>
      <TextField id="outlined-basic" label="Anime" variant="outlined" />
    </div>
  );
}

export default Welcome;
