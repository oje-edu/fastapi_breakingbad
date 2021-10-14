const ActorItem = ({ item }) => {
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
              <strong>IN DEV</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActorItem;
