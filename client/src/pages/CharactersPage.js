import { useState, useEffect } from "react";
import CharacterGrid from "../components/characters/CharacterGrid";
import Search from "../components/ui/Search";
import axios from "axios";
import api from "../api";

const CharactersPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://bbdevapi.oje.guru/character/names/?firstname=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <>
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </>
  );
};

export default CharactersPage;
