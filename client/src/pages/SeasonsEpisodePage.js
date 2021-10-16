import { useState, useEffect } from "react";
import EpisodeSeasonGrid from "../components/episodes/EpisodeSeasonGrid";

import axios from "axios";

const SeasonsEpisodePage = ({ match }) => {
  const [sepisodes, setSepisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSeasonEpisodes = async () => {
      const res = await axios(
        `https://bbdevapi.oje.guru/seasons/${match.params.id}/episodes`
      );

      setSepisodes(res.data);
      setIsLoading(false);
    };

    fetchSeasonEpisodes();
  }, []);
  return (
    <>
      <EpisodeSeasonGrid isLoading={isLoading} sepisodes={sepisodes} />
    </>
  );
};

export default SeasonsEpisodePage;
