import { Link } from "react-router-dom";
const SeasonItem = ({ season }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <Link to={`/season/${season.season_id}/episodes`}>
            <img src={season.image} alt="" />
          </Link>
        </div>
        <div className="card-back">
          <h1>{season.title}</h1>
          <ul>
            <li>{season.plot}</li>
            <li>
              <strong>Produktionsjahr:</strong> {season.year}
            </li>
            <li>
              <Link
                className="item-links"
                to={`/season/${season.season_id}/episodes`}
              >
                Episoden{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SeasonItem;
