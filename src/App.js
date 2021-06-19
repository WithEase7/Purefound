import "../src/Menu/Sign3.css";
import "./App.css";
import '../src/Menu/Products.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AnimalProducts from "./Menu/AnimalProducts";
import ContactUs from "./Menu/ContactUs";
import AgriculturalProducts from "./Menu/AgriculturalProducts";
import Pure from "./Menu/Pure";
import Home from "./Menu/Home";
import Login from "./Menu/Login";
import SignUp from "./Menu/SignUp";

function App() {
  return (
    <div className="app-div">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/animal" component={AnimalProducts} />
          <Route exact path="/agriculture" component={AgriculturalProducts} />
          <Route exact path="/pure" component={Pure} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
