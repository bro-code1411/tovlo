import "./App.css";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import TripDetails from "./pages/TripDetails";
import ReactGA from "react-ga4";
import RouteChangeTracker from "./components/RouterChangeTracker";
import Search from "./pages/Search";
import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { darkTheme, lightTheme } from "./components/MuiTheme";

const TRACKING_ID = "G-5DVGR850X9";
ReactGA.initialize(TRACKING_ID);

function App() {
  const context = useContext(ThemeContext);
  const { isDark } = context;
  console.log(isDark);

  return (
    <>
      <RouteChangeTracker />
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/trips" component={Trips} />
          <Route exact path="/trips/:slug" component={TripDetails} />
          <Route exact path="/search" component={Search} />
          <Route component={Error} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
