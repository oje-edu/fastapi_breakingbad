import { Link } from "react-router-dom";

const CharacterItem = ({ character }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={character?.image} alt="" />
        </div>
        <div className="card-back">
          <h1>{character?.firstname}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {character?.firstname}{" "}
              {character?.lastname}
            </li>
            <li>
              <strong>Spitzname(n):</strong> {character?.aliasname}
            </li>
            <li>
              <strong>Serien Status:</strong> {character?.status?.status_name}
            </li>
            {/* <li>
              {character?.info.length > 10 ? (
                <Link
                  className="item-links"
                  to={`/character/${character.character_id}`}
                >
                  Infos
                </Link>
              ) : (
                <p>Keine weiteren Informationen vorhanden</p>
              )}
            </li> */}
            <li>
              <Link
                className="item-links"
                to={`/character/${character.character_id}`}
              >
                Infos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
