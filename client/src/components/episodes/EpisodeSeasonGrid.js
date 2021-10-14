import EpisodeSeasonItem from "./EpisodeItem";
import Spinner from "../ui/Spinner";

const EpisodeSeasonGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <EpisodeSeasonItem
          key={item.episode_id}
          item={item}
        ></EpisodeSeasonItem>
      ))}
    </section>
  );
};

export default EpisodeSeasonGrid;
