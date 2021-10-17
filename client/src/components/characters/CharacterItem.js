import { Link } from "react-router-dom";

const CharacterItem = ({ character }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={character?.image} alt="" />
        </div>
        <div className="card-back">
          <h1>{character?.firstname}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {character?.firstname}{" "}
              {character?.lastname}
            </li>
            <li>
              <strong>Spitzname(n):</strong> {character.aliasname}
            </li>
            <li>
              <strong>Serien Status:</strong> {character?.status?.status_name}
            </li>
            <li>
              {character?.families.map(({ family_id, family_name }) => (
                <div key={family_id}>
                  <strong>Familie/Freunde:</strong> {family_name}
                </div>
              ))}
            </li>
            <li>
              {character.jobs?.map((job) => (
                <div key={job.job_id} job={job}>
                  <strong>Beruf:</strong> {job.jobname}
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
