// import dependencies
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

// import component pages
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import DetailPage from "./pages/Details";
import ShoppingPage from "./pages/Shopping";
import Compare from "./pages/Compare";
import Feeder from "./pages/Feeder";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import ContactUs from "./pages/ContactUs"
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";

// Use Global Context provider
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
          <Route path="/ContactUs" component={ContactUs} />
          <Route exact path="/compare" component={Compare} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/user/reset" component={ChangePassword} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={Payment} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/admin/feeder" component={Feeder} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
