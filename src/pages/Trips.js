import React from "react";
import { useLocation } from "react-router";
import TripContainer from "../componenets/TripContainer";

const Trips = () => {
  const location = useLocation();

  return (
    <>
      <TripContainer searchString={location.searchString} />
    </>
  );
};
export default Trips;
