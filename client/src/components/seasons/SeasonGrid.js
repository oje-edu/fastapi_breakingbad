import SeasonItem from "./SeasonItem";
import Spinner from "../ui/Spinner";

const SeasonGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <SeasonItem key={item.season_id} item={item}></SeasonItem>
      ))}
    </section>
  );
};

export default SeasonGrid;
