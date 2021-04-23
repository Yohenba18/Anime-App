import React, { useContext } from "react";
import { SearchContext } from "../context/search";
import { Grid, Typography, List, Paper, GridListTile } from "@material-ui/core";
import './AnimeCard.scss';

function AnimeCard(props) {
  const search = useContext(SearchContext);

  const title =
    props.anime.title.length > 20
      ? `${props.anime.title.substring(0, 15)}...`
      : props.anime.title;
  const imageUrl = props.anime.image_url;
  const synopsis =
    props.anime.synopsis.length > 20
      ? `${props.anime.synopsis.substring(0, 15)}...`
      : props.anime.synopsis;
  return (
    <GridListTile className="animeCard__container">
      <Grid container item xs={12}>
        <Paper elevation={3} className="animeCard__paper">
          <img src={imageUrl} alt={title} style={{ Height: 300 }} />
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="h2" paragraph={true}>
            {synopsis}
          </Typography>
        </Paper>
      </Grid>
    </GridListTile>
  );
}

export default AnimeCard;
