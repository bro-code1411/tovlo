import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import TripContainer from "../components/TripContainer";
import { Helmet } from "react-helmet";

const Search = () => {
  const location = useLocation();
  const searchString = location.searchString;

  return (
    <>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>FindYourTrip: Trip Search</title>
        <meta name="Find the trip you deserve from a collection of 10,000+ trips organised by various associations across India. Search trip based various parameter like location, organisation, rating, dates. Inspect, compare and choose the best trip for you. " />
      </Helmet>
      <Header placeholder={searchString} />
      <main>
        <TripContainer searchString={location.searchString} />
      </main>
      <Footer />
    </>
  );
};
export default Search;
