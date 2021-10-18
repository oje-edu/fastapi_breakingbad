import SeasonItem from "./SeasonItem";
import Spinner from "../ui/Spinner";

const SeasonGrid = ({ seasons, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="season-cards">
      {seasons.map((season) => (
        <SeasonItem key={season.season_id} season={season}></SeasonItem>
      ))}
    </section>
  );
};

export default SeasonGrid;
