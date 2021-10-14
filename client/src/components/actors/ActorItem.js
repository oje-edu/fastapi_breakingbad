const ActorItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h5>
            {item.firstname} {item.lastname}
          </h5>
          <img src={item.image} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.firstname}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.firstname} {item.lastname}
            </li>
            <li>
              <strong>Character:</strong> {item.characters.firstname}{" "}
              {item.characters.lastname}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActorItem;
