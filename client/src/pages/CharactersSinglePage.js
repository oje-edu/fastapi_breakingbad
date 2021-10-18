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
    <section className="character-single-container">
      <div className="character-single-inner">
        <div className="character-single">
          <div className="character-single-left">
            <img src={character.image} alt="" />
          </div>
          <div className="character-single-right">
            <h1>
              {character.firstname} {character.lastname}
            </h1>
            <ul>
              <li>
                <p>{character.info}</p>
              </li>
              <li>
                <p>
                  <strong>Familie/Freunde:</strong>
                  {character?.families.map(({ family_id, family_name }) => (
                    <div key={family_id}>{family_name}</div>
                  ))}
                </p>
              </li>
              <li>
                <p>
                  <strong>Beruf(e):</strong>
                  {character.jobs?.map((job) => (
                    <div key={job.job_id} job={job}>
                      {job.jobname}
                    </div>
                  ))}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharactersSinglePage;
