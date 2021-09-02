import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";
import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TripContext } from "../Context";
import Loading from "../components/Loading";

const Search = () => {
  const location = useLocation();
  const searchString = location.searchString;

  const [selectedLocation, setSelectedLocation] = useState({});

  const context = useContext(TripContext);
  const { loading, trips } = context;

  const [tripFilter, setTripFilter] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    breakfast: false,
    pets: false,
  });
  useEffect(() => {
    let maxPrice = Math.max(...trips.map((item) => item.plan.price));

    setTripFilter({ ...tripFilter, price: maxPrice, maxPrice });
  }, [trips]);

  const handleChange = (event) => {
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    setTripFilter({ ...tripFilter, [name]: value });
  };

  if (loading) {
    return <Loading />;
  }
  const filterTrips = () => {
    let { type, capacity, price, minSize, maxSize, breakfast, pets } =
      tripFilter;
    let tempTrips = [...trips];
    // transform values
    capacity = parseInt(capacity);
    // filter by type
    if (type !== "all") {
      tempTrips = tempTrips.filter((trip) => trip.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempTrips = tempTrips.filter((trip) => trip.capacity >= capacity);
    }
    if (searchString) {
      tempTrips = tempTrips.filter((trip) =>
        trip.search_context.includes(searchString.toLowerCase())
      );
    }
    return tempTrips;
  };

  return (
    <>
      <Header placeholder={searchString} />
      <main>
        <SearchResults
          setSelectedLocation={setSelectedLocation}
          results={filterTrips()}
        />
      </main>
      <Footer />
    </>
  );
};
export default Search;
