import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.character_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;