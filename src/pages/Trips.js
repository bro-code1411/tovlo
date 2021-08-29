import React from "react";
import Hero from "../componenets/Hero";
import { Banner } from "../componenets/Banner";
import { Link } from "react-router-dom";
import TripContainer from "../componenets/TripContainer";

const Trips = () => {

  return (
    <>
      {/* <Hero hero="roomsHero">
        <Banner title="Trips">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero> */}
      <TripContainer/>
    </>
  );
};
export default Trips;
