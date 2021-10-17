import { useState, useEffect } from "react";
import Spinner from "../components/ui/Spinner";

import api from "../api";

const EpisodesSinglePage = (props) => {
  const [episode, setEpisode] = useState([]);
  const { id } = props.match.params;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEpisode = async () => {
      api
        .getEpisodesDataById(id)
        .then((res) => {
          setEpisode(res.data);
          console.log(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchEpisode();
  }, [id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="episode-single-container">
      <div className="episode-single-inner">
        <div className="card-inner">
          <div className="episode-single">
            <img src={episode.image} alt="" />
            <h1>{episode.title}</h1>
            <ul>
              <li>{episode.plot}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpisodesSinglePage;
