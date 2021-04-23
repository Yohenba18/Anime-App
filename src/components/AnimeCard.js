import React, { useContext } from "react";
import { SearchContext } from "../context/search";
import { Grid, Typography, Link, Paper, GridListTile } from "@material-ui/core";
import './AnimeCard.scss';
import { useHistory } from "react-router";

function AnimeCard(props) {
    const history = useHistory;
  const search = useContext(SearchContext);
  const onClickHandeler = () => {
        fetch(`https://api.jikan.moe/v3/anime/${props.anime.mal_id}`)
        .then(response => response.json())
        .then((data) => {
        history.push("/MoreInfo");
        })
  }

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
          <img src={imageUrl} alt={title}  />
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="h2" paragraph={true}>
            {synopsis}
          </Typography>
          <Link variant="body1" component="button" style={{marginBottom: 0}} onClick={onClickHandeler} >More Info</Link>
        </Paper>
      </Grid>
    </GridListTile>
  );
}

export default AnimeCard;
