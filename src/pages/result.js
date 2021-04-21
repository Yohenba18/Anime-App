import React, { useEffect, useContext, useState } from "react";
import AnimeList from "../components/AnimeList";
import { SearchContext } from "../context/search";

const Result = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);

  useEffect(() => {
    if (search.animeData === undefined || search.animeData.length === 0) {
      try {
        search.setData(JSON.parse(localStorage.getItem("myData")));
        setDataExists(true);
      } catch (error) {
        console.log(error);
        setDataExists(false);
      }
      console.log(search.animeData);
    }
  }, [search]);

  return <div>{(dataExists && <AnimeList/>) || "data does not exists"}</div>;
};

export default Result;
