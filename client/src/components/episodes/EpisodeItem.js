import { Link } from "react-router-dom";

const EpisodeItem = ({ episode }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h5>Episode {episode.episode_id}</h5>
          <img src={episode.image} alt="" />
        </div>
        <div className="card-back">
          <h1>{episode.title}</h1>
          <ul>
            <li>
              <p>
                {episode.plot.length > 150
                  ? episode.plot.substring(0, 150) + "..."
                  : episode.plot}
              </p>
              {episode.plot.length > 250 ? (
                <Link
                  className="item-links"
                  to={`/episode/${episode.episode_id}`}
                >
                  Mehr
                </Link>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EpisodeItem;
