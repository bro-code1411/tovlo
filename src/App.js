import "./App.css";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import TripDetails from "./pages/TripDetails";
import ReactGA from "react-ga";
import RouteChangeTracker from "./components/RouterChangeTracker";
import Search from "./pages/Search";

const TRACKING_ID = "G-EQDF57M1N9";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <RouteChangeTracker />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trips" component={Trips} />
        <Route exact path="/trips/:slug" component={TripDetails} />
        <Route exact path="/search" component={Search} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
