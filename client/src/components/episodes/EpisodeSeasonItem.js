import { useHistory } from "react-router-dom";

const EpisodeSeasonItem = ({ item }) => {
  let history = useHistory();

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.image} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.title}</h1>
          <ul>
            <li>
              <strong>Plot:</strong> {item.plot}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EpisodeSeasonItem;
