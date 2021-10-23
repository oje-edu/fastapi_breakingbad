import { useState, useEffect } from "react";
import Spinner from "../components/ui/Spinner";

import api from "../api";

const CharactersSinglePage = (props) => {
  const [character, setCharacter] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [families, setFamilies] = useState([]);
  const { id } = props.match.params;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      api
        .getCharacterByIdData(id)
        .then((res) => {
          setCharacter(res.data);
          setJobs(res.data.jobs);
          setFamilies(res.data.families);
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
                <p>
                  <a
                    className="info"
                    href={character.info_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    © und Text-Quelle
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <strong>Familie/Freunde: </strong>
                  {families?.map((family, index) => {
                    return (
                      <span key={index}>
                        {(index ? ", " : "") + family.family_name}
                      </span>
                    );
                  })}
                </p>
              </li>
              <li>
                <p>
                  <strong>Beruf(e): </strong>
                  {jobs?.map((job, index) => {
                    return (
                      <span key={index}>
                        {(index ? ", " : "") + job.jobname}
                      </span>
                    );
                  })}
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
