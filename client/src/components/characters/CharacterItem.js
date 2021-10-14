const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.image} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.firstname}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.firstname} {item.lastname}
            </li>
            <li>
              <strong>Spitzname(n):</strong> {item.aliasname}
            </li>
            <li>
              <strong>Serien Status:</strong> {item.status.status_name}
            </li>
            {/* <li>
              <strong>Familie und Freunde:</strong> {item.families.family_name}
            </li>
            <li>
              <strong>Berufe:</strong> {item.jobs.jobname}
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
