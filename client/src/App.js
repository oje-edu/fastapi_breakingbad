import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/ui/Header";

import "./App.css";
import SeasonsPage from "./pages/SeasonsPage";
import CharactersPage from "./pages/CharactersPage";
import EpisodesPage from "./pages/EpisodesPage";
import SeasonsEpisodePage from "./pages/SeasonsEpisodePage";
import ActorsPage from "./pages/ActorsPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Header />
          <main>
            <Switch>
              <Route path="/actors" component={ActorsPage} />
              <Route path="/seasons/:id" component={SeasonsEpisodePage} />
              <Route path="/episodes" component={EpisodesPage} />
              <Route path="/characters" component={CharactersPage} />
              <Route path="/" component={SeasonsPage} />
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
};

export default App;
