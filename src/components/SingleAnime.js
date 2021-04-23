import React, { useEffect } from "react";
import { Grid, Typography, Paper, Link } from "@material-ui/core";

function SingleAnime(props) {
  const {
    title,
    image_url,
    rating,
    airing,
    broadcast,
    score,
    url,
  } = props.info;

  useEffect(() => {
    console.log(title, image_url);
  }, [props.info]);

  return (
    <Grid
      container
      spacing={10}
      justify="center"
      direction="row"
      alignItems="center"
      alignContent="center"
    >
      <Paper elevation={3}>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          Airing: {airing}
        </Typography>
        <Typography variant="h5" component="h2">
          Score: {score}
        </Typography>
        <Typography variant="h5" component="h2">
          Broadcast: {broadcast}
        </Typography>
        <Typography variant="h5" component="h2">
          Rating: {rating}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default SingleAnime;
