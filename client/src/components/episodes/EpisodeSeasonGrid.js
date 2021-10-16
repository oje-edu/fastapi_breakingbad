import EpisodeSeasonItem from "./EpisodeItem";
import Spinner from "../ui/Spinner";

const EpisodeSeasonGrid = ({ sepisodes, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {sepisodes.map((sepisode) => (
        <EpisodeSeasonItem
          key={sepisode.episode_id}
          sepisode={sepisode}
        ></EpisodeSeasonItem>
      ))}
    </section>
  );
};

export default EpisodeSeasonGrid;
