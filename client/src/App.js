import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/ui/Header";

import localization from "moment/locale/de";

import "./App.css";
import SeasonsPage from "./pages/SeasonsPage";
import CharactersPage from "./pages/CharactersPage";
import EpisodesPage from "./pages/EpisodesPage";
import SeasonsEpisodePage from "./pages/SeasonsEpisodePage";
import ActorsPage from "./pages/ActorsPage";
import Footer from "./components/ui/Footer";
import ScrollButton from "./components/utils/ScrollButton";
import EpisodesSinglePage from "./pages/EpisodesSinglePage";
import CharactersSinglePage from "./pages/CharactersSinglePage";
import CopyrightNotice from "./pages/CopyrightNotice";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <main>
            <Switch>
              <Route path="/actors" component={ActorsPage} />
              <Route
                path="/season/:id/episodes"
                component={SeasonsEpisodePage}
              />
              <Route path="/episodes" component={EpisodesPage} />
              <Route path="/episode/:id" component={EpisodesSinglePage} />
              />
              <Route path="/characters" component={CharactersPage} />
              />
              <Route path="/character/:id" component={CharactersSinglePage} />
              />
              <Route path="/notice" component={CopyrightNotice} />
              <Route path="/" component={SeasonsPage} />
            </Switch>
            <ScrollButton />
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
