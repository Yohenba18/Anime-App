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
  }, [title, image_url]);

  return (
    <Grid
      container
      spacing={10}
      justify="center"
      direction="row"
      alignItems="center"
      alignContent="center"
    >
    <Grid item>
        <img src={image_url} alt={title} className="singleanime__image" />
      </Grid>
      <Grid item>
      <Paper elevation={3}>
        <Typography variant="h5" component="h2">
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
        <Link componet="button" variant="body1" href={url}>
          For more
        </Link>
      </Paper>
      </Grid>
      
    </Grid>
  );
}

export default SingleAnime;
