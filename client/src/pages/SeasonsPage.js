import { useState, useEffect } from "react";
import SeasonsGrid from "../components/seasons/SeasonGrid";

import axios from "axios";

const SeasonsPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://bbdevapi.oje.guru/seasons/`);

      setItems(result.data);
      setIsLoading(false);
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
