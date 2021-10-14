import { useState, useEffect } from "react";
import ActorGrid from "../components/actors/ActorGrid";
import Search from "../components/ui/Search";
import axios from "axios";

const ActorsPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://bbdevapi.oje.guru/actors/chars/`);
      console.log(result);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <>
      <ActorGrid isLoading={isLoading} items={items} />
    </>
  );
};

export default ActorsPage;
