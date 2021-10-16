import { useState, useEffect } from "react";
import CharacterGrid from "../components/characters/CharacterGrid";
import Search from "../components/ui/Search";
import axios from "axios";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await axios(
        `https://bbdevapi.oje.guru/character/names/?firstname=${query}`
      );
      setCharacters(res.data);
      setIsLoading(false);
    };

    fetchCharacters();
  }, [query]);

  return (
    <>
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </>
  );
};

export default CharactersPage;
