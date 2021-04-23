import React from "react";
import { SearchContext } from "../context/search";
import { Grid, Typography, List, Paper, GridListTile } from "@material-ui/core";

function AnimeCard(props) {
  const title = props.anime.title.length;
  const imageUrl = props.anime.imageUrl;
  const synopsis = props.anime.synopsis;
  return (
    <GridListTile>
      <Grid container item xs={12}>
        <Paper >
        <img src={imageUrl} alt={title} style={{ maxHeight: 300 }} />
        </Paper>
      </Grid>
    </GridListTile>
  );
}

export default AnimeCard;
