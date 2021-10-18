import { useState, useEffect } from "react";
import Spinner from "../components/ui/Spinner";

import api from "../api";

const CharactersSinglePage = (props) => {
  const [character, setCharacter] = useState([]);
  const [countJobs, setCountJobs] = useState();
  const [countFamilies, setCountFamilies] = useState();
  const { id } = props.match.params;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      api
        .getCharacterByIdData(id)
        .then((res) => {
          setCharacter(res.data);
          setCountJobs(res.data.jobs.length);
          setCountFamilies(res.data.families.length);
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
                  <strong>Familie/Freunde:</strong>
                  {character?.families.map((family) => (
                    <div
                      key={family.family_id}
                      family={family}
                      countFamilies={countFamilies}
                    >
                      {countFamilies > 1
                        ? family.family_name + ","
                        : family.family_name}
                    </div>
                  ))}
                </p>
              </li>
              <li>
                <p>
                  <strong>Beruf(e):</strong>
                  {character.jobs?.map((job) => (
                    <div key={job.job_id} job={job} countJobs={countJobs}>
                      {countJobs > 1 ? job.jobname + "," : job.jobname + " "}
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
