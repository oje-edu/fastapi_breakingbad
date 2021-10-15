import { useState, useEffect } from "react";
import SeasonsGrid from "../components/seasons/SeasonGrid";

import api from "../api";

const SeasonsPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      api
        .getSeasonsData(items)
        .then((result) => {
          setItems(result.data);
          setIsLoading(false);
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchItems();
  }, []);
  return (
    <>
      <SeasonsGrid isLoading={isLoading} items={items} />
    </>
  );
};

export default SeasonsPage;
