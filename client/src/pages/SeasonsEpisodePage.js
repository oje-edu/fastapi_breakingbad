import { useState, useEffect } from "react";
import EpisodeSeasonGrid from "../components/episodes/EpisodeSeasonGrid";

import axios from "axios";

const SeasonsEpisodePage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://bbdevapi.oje.guru/seasons/${query}`);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  return (
    <>
      <EpisodeSeasonGrid isLoading={isLoading} items={items} />
    </>
  );
};

export default SeasonsEpisodePage;
