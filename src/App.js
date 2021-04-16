import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-dom";
import PokemonList from "./containers/PokemonList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
