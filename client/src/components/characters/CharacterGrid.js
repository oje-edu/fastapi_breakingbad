import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {characters.map((character) => (
        <CharacterItem
          key={character.character_id}
          character={character}
        ></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
