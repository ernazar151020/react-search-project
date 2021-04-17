import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./pages/AboutPage";
import SingleCocktailPage from "./pages/SingleCocktailPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
