import { Link } from "react-router-dom";

const EpisodeSeasonItem = ({ episode, seasonEpisodes }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={episode.image} alt="" />
        </div>
        <div className="card-back">
          <h1>
            Staffel {seasonEpisodes.season_id} / Episode {episode.seasonepisode}
          </h1>
          <ul>
            <li>
              <p>
                {episode.plot.length > 150
                  ? episode.plot.substring(0, 150) + " ..."
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

export default EpisodeSeasonItem;
