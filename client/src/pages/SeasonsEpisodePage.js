import { useState, useEffect } from "react";
import EpisodeSeasonGrid from "../components/episodes/EpisodeSeasonGrid";

import api from "../api";

const SeasonsEpisodePage = (props) => {
  const { id } = props.match.params;
  const [seasonEpisodes, setSeasonEpisodes] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSeasonEpisodes = async () => {
      api
        .getSeasonEpisodesData(id)
        .then((res) => {
          setSeasonEpisodes(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchSeasonEpisodes();
  }, [id]);

  return (
    <>
      <EpisodeSeasonGrid
        isLoading={isLoading}
        seasonEpisodes={seasonEpisodes}
      />
    </>
  );
};

export default SeasonsEpisodePage;
