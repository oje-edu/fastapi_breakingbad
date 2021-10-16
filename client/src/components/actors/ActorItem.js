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
          {/* <h5>
            {actor.firstname} {actor.lastname}
          </h5> */}
          <img src={actor.image} alt="" />
        </div>
        <div className="card-back">
          <h1>
            {actor.firstname} {actor.lastname}
          </h1>
          <ul>
            <li>Geburtstag: {actor.birthday}</li>
            <li>Alter: {age}</li>
            <li>
              <a href={actor.url} target="_blank" rel="noopener noreferrer">
                Biografie
              </a>
            </li>
            <li>
              {actor.characters.map((char) => (
                <div key={char.character_id} char={char}>
                  Charakter: {char.firstname} {char.lastname}
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
