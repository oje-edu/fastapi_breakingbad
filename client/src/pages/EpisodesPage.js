import { useState, useEffect } from "react";
import EpisodeGrid from "../components/episodes/EpisodeGrid";
// import Search from "../components/ui/Search";
import api from "../api";

const EpisodesPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      api
        .getEpisodesData(items)
        .then((result) => {
          setItems(result.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
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
