import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./component/header";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
