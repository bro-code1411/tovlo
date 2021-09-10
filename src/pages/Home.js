import React from "react";
import Cards from "../components/Cards";
import { live } from "../data";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>FindYourTrip: Home</title>
        <meta name="India's first and only trip aggregator. Find the trip you deserve from a collection of 10,000+ trips organised by various associations across India. Inspect, compare and choose the best trip for you. " />
      </Helmet>
      <Hero />
      <Cards {...live} />
      <Explore />

      {/* <FeaturedTrips /> */}
      {/* <AdSence.Google
        className="adsbygoogle"
        style={{ display: "block" }}
        format="fluid"
        layoutKey="-7r+eu-z-1k+6t"
        client="ca-pub-7305486482263598"
        slot="4597530725"
      /> */}
      <Banner />
      <Footer />
    </>
  );
};
export default Home;
