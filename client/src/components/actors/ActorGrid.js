import ActorItem from "./ActorItem";
import Spinner from "../ui/Spinner";

const ActorGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map(
        (item) => (
          console.log(item),
          (<ActorItem key={item.actor_id} item={item}></ActorItem>)
        )
      )}
    </section>
  );
};

export default ActorGrid;
