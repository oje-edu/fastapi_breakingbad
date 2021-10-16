import { useState, useEffect } from "react";
import EpisodeGrid from "../components/episodes/EpisodeGrid";

import api from "../api";

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [count, setCount] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      api
        .getEpisodesData(episodes)
        .then((res) => {
          setEpisodes(res.data);
          setCount(res.data.length);
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
      <EpisodeGrid isLoading={isLoading} episodes={episodes} count={count} />
    </>
  );
};

export default EpisodesPage;
