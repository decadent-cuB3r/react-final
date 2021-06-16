import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import DetailPage from "./pages/Details";
import ShoppingPage from "./pages/Shopping";
import Compare from "./pages/Compare";

import { StoreProvider } from "./context/index";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/product/:product" component={ProductPage} />
          <Route exact path="/detail/:productId" component={DetailPage} />
          <Route exact path="/shoppingbag" component={ShoppingPage} />
          <Route exact path="/compare" component={Compare} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
