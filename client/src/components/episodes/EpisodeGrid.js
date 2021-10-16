import EpisodeItem from "./EpisodeItem";
import Spinner from "../ui/Spinner";

const EpisodeGrid = ({ count, episodes, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="count">
        <p>{count} Episoden</p>
      </div>
      <section className="cards">
        {episodes.map((episode) => (
          <EpisodeItem key={episode.episode_id} episode={episode}></EpisodeItem>
        ))}
      </section>
    </>
  );
};

export default EpisodeGrid;
