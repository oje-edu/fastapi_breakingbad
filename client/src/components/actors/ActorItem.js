import moment from "moment";
const ActorItem = ({ actor }) => {
  var dob = new Date(actor.birthday);
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={actor.image} alt="" />
        </div>
        <div className="card-back">
          <h1>
            {actor.firstname} {actor.lastname}
          </h1>
          <ul>
            <li>
              Geboren:{" "}
              {actor.birthday === "1900-01-01"
                ? "Keine Info gefunden"
                : moment(actor.birthday).format("DD.MM.YYYY")}
            </li>
            <li>
              Alter: {actor.birthday === "1900-01-01" ? "Unbekannt" : age}
            </li>
            <li>
              <a href={actor.url} target="_blank" rel="noopener noreferrer">
                Biografie
              </a>
            </li>
            <li>
              <hr></hr>
            </li>
            <li>
              {actor.characters.map((character) => (
                <div key={character.character_id} character={character}>
                  <strong>Character:</strong> {character.firstname}{" "}
                  {character.lastname}
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActorItem;
