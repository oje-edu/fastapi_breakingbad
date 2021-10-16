import ActorItem from "./ActorItem";
import Spinner from "../ui/Spinner";

const ActorGrid = ({ actors, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {actors.map((actor) => (
        <ActorItem key={actor.actor_id} actor={actor}></ActorItem>
      ))}
    </section>
  );
};

export default ActorGrid;
