import "./App.css";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./componenets/Navbar";
import TripDetails from "./pages/TripDetails";
import ReactGA from "react-ga";
import RouteChangeTracker from "./componenets/RouterChangeTracker";
const TRACKING_ID = "G-J4LXKVS0BL";

ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <RouteChangeTracker />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trips" component={Trips} />
        <Route exact path="/trips/:slug" component={TripDetails} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
