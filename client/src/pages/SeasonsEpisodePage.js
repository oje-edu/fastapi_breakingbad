import { useState, useEffect } from "react";
import EpisodeSeasonGrid from "../components/episodes/EpisodeSeasonGrid";

import axios from "axios";

const SeasonsEpisodePage = (props) => {
  const { id } = props.match.params;
  const [seasonEpisodes, setSeasonEpisodes] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSeasonEpisodes = async () => {
      const res = await axios(
        `https://bbdevapi.oje.guru/seasons/${id}/episodes`
      );
      setSeasonEpisodes(res.data);
      setIsLoading(false);
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
