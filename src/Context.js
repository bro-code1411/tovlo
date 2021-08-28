import React from "react";
import { useState } from "react";
import { items } from "./data";
import { useEffect } from "react";
const TripContext = React.createContext();

const TripProvider = ({ children }) => {

  const [tripData, setTripData] = useState({
    trips: [],
    sortedTrips: [],
    featuredTrips: [],
    loading: true,
  });
  const [tripFilter, setTripFilter] = useState({
    type:'all',
    capacity:1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize:0,
    breakfast:false,
    pets:false
  });

  useEffect(() => {
    let trips = formatData(items);
    let featuredTrips = trips.filter(trip => trip.featured === true);
    let maxPrice = Math.max(...trips.map(item =>item.price));
    let maxSize = Math.max(...trips.map(item =>item.size));
    setTripData({
        trips,sortedTrips:trips,featuredTrips,loading:false
    });
    setTripFilter({price:maxPrice,maxPrice,maxSize});
  }, []);

  const handleChange = (event)=>{
    const target = event.target;
    const value = event.type==='checkbox'?target.checked:target.value;
    const name = event.target.name;
    setTripFilter({...tripFilter,[name]:value});
  };



  const getTrip = (slug) => {
    let tempTrips = [...tripData.trips];
    const trip = tempTrips.find((trip)=>
      trip.slug ===slug);
    console.log(trip);
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
    <TripContext.Provider value={{...tripData,...tripFilter, getTrip, handleChange}}>{children}</TripContext.Provider>
  );
};

const TripConsumer = TripContext.Consumer;

export { TripConsumer, TripProvider, TripContext };
