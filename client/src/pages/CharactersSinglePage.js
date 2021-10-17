import { useState, useEffect } from "react";
import Spinner from "../components/ui/Spinner";

import api from "../api";

const CharactersSinglePage = (props) => {
  const [character, setCharacter] = useState([]);
  const { id } = props.match.params;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      api
        .getCharacterByIdData(id)
        .then((res) => {
          setCharacter(res.data);
          console.log(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchCharacter();
  }, [id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="episode-single-container">
      <div className="episode-single-inner">
        <div className="card-inner">
          <div className="episode-single">
            <img src={character.image} alt="" />
            <h1>
              {character.firstname} {character.lastname}
            </h1>
            <ul>
              <li>{character.info}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharactersSinglePage;
