import { useState, useEffect } from "react";
import EpisodeGrid from "../components/episodes/EpisodeGrid";
// import Search from "../components/ui/Search";
import axios from "axios";

const EpisodesPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://bbdevapi.oje.guru/episodes/${query}`);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <>
      {/* <Search getQuery={(q) => setQuery(q)} /> */}
      <EpisodeGrid isLoading={isLoading} items={items} />
    </>
  );
};

export default EpisodesPage;
