const SeasonItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.image} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.title}</h1>
          <ul>
            <li>{item.plot}</li>
            <li>
              <strong>Produktionsjahr:</strong> {item.year}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SeasonItem;
