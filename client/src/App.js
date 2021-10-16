import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/ui/Header";

import moment from "moment";
import localization from "moment/locale/de";

import "./App.css";
import SeasonsPage from "./pages/SeasonsPage";
import CharactersPage from "./pages/CharactersPage";
import EpisodesPage from "./pages/EpisodesPage";
import SeasonsEpisodePage from "./pages/SeasonsEpisodePage";
import ActorsPage from "./pages/ActorsPage";
import Footer from "./components/ui/Footer";
import ScrollButton from "./components/utils/ScrollButton";

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
              <Route path="/characters" component={CharactersPage} />
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
