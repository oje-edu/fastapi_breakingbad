const ActorItem = ({ item }) => {
  console.log(item);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          {/* <h5>
            {item.firstname} {item.lastname}
          </h5> */}
          <img src={item.image} alt="" />
        </div>
        <div className="card-back">
          <h1>
            {item.firstname} {item.lastname}
          </h1>
          <ul>
            <li>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                Biografie
              </a>
            </li>
            <li>
              {item.characters.map((char) => (
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
