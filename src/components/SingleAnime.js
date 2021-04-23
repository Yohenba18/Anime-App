import React, { useEffect } from "react";

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
      console.log(title,image_url);
  },[props])

  return (
    <div>
      <h1>imma god</h1>
    </div>
  );
}

export default SingleAnime;
