const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.firstname}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.firstname} {item.lastname}
            </li>
            <li>
              <strong>Nickname:</strong> {item.aliasname}
            </li>
            <li>
              <strong>Serien Status:</strong> {item.status_name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
