const ActorItem = ({ actor }) => {
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
