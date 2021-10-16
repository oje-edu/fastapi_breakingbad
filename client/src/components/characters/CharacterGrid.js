import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ count, characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="count">
        <p>{count} Charaktere in der Datenbank</p>
      </div>
      <section className="cards">
        {characters.map((character) => (
          <CharacterItem
            key={character.character_id}
            character={character}
          ></CharacterItem>
        ))}
      </section>
    </>
  );
};

export default CharacterGrid;
