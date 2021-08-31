import React from "react";
import TripList from "./TripList";
import TripFilter from "./TripFilter";
import { TripContext } from "../Context";
import Loading from "./Loading";
import { useContext, useState, useEffect } from "react";

const TripContainer = ({ searchString }) => {
  const context = useContext(TripContext);
  const { loading, trips } = context;

  const [tripFilter, setTripFilter] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });
  useEffect(() => {
    let maxPrice = Math.max(...trips.map((item) => item.price));
    let maxSize = Math.max(...trips.map((item) => item.size));

    setTripFilter({ ...tripFilter, price: maxPrice, maxPrice, maxSize });
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
  const filteredTrips = () => {
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
      tempTrips = tempTrips.filter((trip) => trip.name === searchString);
    }
    return tempTrips;
  };

  return (
    <>
      <TripFilter
        trips={trips}
        tripFilter={tripFilter}
        handleChange={handleChange}
      />
      <TripList trips={filteredTrips()} searchString={searchString} />
    </>
  );
};

export default TripContainer;
