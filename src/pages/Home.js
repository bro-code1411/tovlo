import React from "react";
import FeaturedTrips from "../components/FeaturedTrips";
import AdSence from "react-adsense";
import Cards from "../components/Cards";
import { live } from "../data";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Banner from "../components/Banner";
const Home = () => {
  return (
    <>
      <Hero />
      <Cards {...live} />
      <Explore />

      <FeaturedTrips />
      <AdSence.Google
        className="adsbygoogle"
        style={{ display: "block" }}
        format="fluid"
        layoutKey="-7r+eu-z-1k+6t"
        client="ca-pub-7305486482263598"
        slot="4597530725"
      />
      <Banner />
      <Footer />
    </>
  );
};
export default Home;
