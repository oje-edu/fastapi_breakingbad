import { useHistory } from "react-router-dom";

const EpisodeItem = ({ item }) => {
  let history = useHistory();

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h5>Episode {item.episode_id}</h5>
          <img
            // onClick={() => history.push(`/seasons/${item.season_id}`)}
            src={item.image}
            alt=""
          />
        </div>
        <div className="card-back">
          <h1>{item.title}</h1>
          <ul>
            <li>
              <p>
                {item.plot.length > 250
                  ? item.plot.substring(0, 250) + " ..."
                  : item.plot}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EpisodeItem;
