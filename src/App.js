import "./App.css";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./componenets/Navbar";
import TripDetails from "./pages/TripDetails";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trips" component={Trips} />
        <Route exact path="/trips/:slug" component={TripDetails}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
