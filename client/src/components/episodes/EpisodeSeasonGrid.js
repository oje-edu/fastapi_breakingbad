import EpisodeSeasonItem from "./EpisodeSeasonItem";
import Spinner from "../ui/Spinner";

const EpisodeSeasonGrid = ({ seasonEpisodes, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {seasonEpisodes.episodes.map((episode) => (
        <EpisodeSeasonItem
          key={episode.episode_id}
          episode={episode}
        ></EpisodeSeasonItem>
      ))}
    </section>
  );
};

export default EpisodeSeasonGrid;
