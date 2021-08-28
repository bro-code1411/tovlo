import React from "react";
import { useState } from "react";
import { items } from "./data";
import { useEffect } from "react";
const TripContext = React.createContext();

const TripProvider = ({ children }) => {

  const [tripData, setTripData] = useState({
    trips: [],
    featuredTrips: [],
    loading: true,
  });

  useEffect(() => {
    let trips = formatData(items);
    let featuredTrips = trips.filter(trip => trip.featured === true);
    setTripData({
        trips,featuredTrips,loading:false
    });
  }, []);


  const getTrip = (slug) => {
    let tempTrips = [...tripData.trips];
    const trip = tempTrips.find((trip)=>
      trip.slug ===slug);
    return trip;
  };

  function formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((images) => images.fields.file.url);
      let trip = { ...item.fields, images, id };
      return trip;
    });
    return tempItems;
  }

  return (
    <TripContext.Provider value={{...tripData, getTrip}}>{children}</TripContext.Provider>
  );
};

const TripConsumer = TripContext.Consumer;

export { TripConsumer, TripProvider, TripContext };
