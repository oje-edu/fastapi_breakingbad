import { useState, useEffect } from "react";
import SeasonsGrid from "../components/seasons/SeasonGrid";

import api from "../api";

const SeasonsPage = () => {
  const [seasons, setSeasons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSeasons = async () => {
      api
        .getSeasonsData(seasons)
        .then((res) => {
          setSeasons(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchSeasons();
  }, []);
  return (
    <>
      <SeasonsGrid isLoading={isLoading} seasons={seasons} />
    </>
  );
};

export default SeasonsPage;
