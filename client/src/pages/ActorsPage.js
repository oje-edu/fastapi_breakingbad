import { useState, useEffect } from "react";
import ActorGrid from "../components/actors/ActorGrid";

import api from "../api";

const ActorsPage = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchActors = async () => {
      api
        .getActorsData(actors)
        .then((res) => {
          setActors(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchActors();
  }, []);

  return (
    <>
      <ActorGrid isLoading={isLoading} actors={actors} />
    </>
  );
};

export default ActorsPage;
