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
            <li>
              {item.families.map((family) => (
                <div key={family.family_id} family={family}>
                  <strong>Familie/Freunde:</strong> {family.family_name}
                </div>
              ))}
            </li>
            <li>
              {item.jobs.map((job) => (
                <div key={job.job_id} job={job}>
                  <strong>Beruf:</strong> {job.jobname}
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
