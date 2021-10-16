import { useState, useEffect } from "react";
import EpisodeGrid from "../components/episodes/EpisodeGrid";

import api from "../api";

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      api
        .getEpisodesData(episodes)
        .then((res) => {
          setEpisodes(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchEpisodes();
  }, []);

  return (
    <>
      {/* <Search getQuery={(q) => setQuery(q)} /> */}
      <EpisodeGrid isLoading={isLoading} episodes={episodes} />
    </>
  );
};

export default EpisodesPage;
