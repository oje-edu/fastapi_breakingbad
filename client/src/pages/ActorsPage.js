import { useState, useEffect } from "react";
import ActorGrid from "../components/actors/ActorGrid";
// import Search from "../components/ui/Search";
import api from "../api";

const ActorsPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      api
        .getActorsData(items)
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
      <ActorGrid isLoading={isLoading} items={items} />
    </>
  );
};

export default ActorsPage;
