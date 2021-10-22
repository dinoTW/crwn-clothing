import "./App.css";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/Homepage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
