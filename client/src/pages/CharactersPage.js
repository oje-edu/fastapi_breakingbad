import { useState, useEffect } from "react";
import CharacterGrid from "../components/characters/CharacterGrid";
import Search from "../components/ui/Search";
import axios from "axios";
import api from "../api";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      api
        .getCharactersData(query)
        .then((res) => {
          setCharacters(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
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
