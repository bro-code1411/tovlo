import React from "react";
import Hero from "../componenets/Hero";
import { Banner } from "../componenets/Banner";
import { Link } from "react-router-dom";
import Services from "../componenets/Services";
import FeaturedTrips from "../componenets/FeaturedTrips";
import HomeSearch from "../componenets/HomeSearch";
const Home = () => {
  return (
    <>
      <Hero hero="homeHero">
        {/* <Banner title="Tovlo" subtitle="The trip you need" >
            <Link to ="/trips" className="btn-primary">
                Trips
            </Link>
            </Banner> */}
        <HomeSearch />
      </Hero>
      <Services />
      <FeaturedTrips />
    </>
  );
};
export default Home;
