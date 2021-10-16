import { useHistory } from "react-router-dom";

const EpisodeSeasonItem = ({ sepisode }) => {
  let history = useHistory();

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={sepisode.image} alt="" />
        </div>
        <div className="card-back">
          <h1>{sepisode.title}</h1>
          <ul>
            <li>
              <strong>Plot:</strong> {sepisode.plot}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EpisodeSeasonItem;
