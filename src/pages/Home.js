import React from "react";
import Hero from "../componenets/Hero";
import Services from "../componenets/Services";
import FeaturedTrips from "../componenets/FeaturedTrips";
import AdSence from "react-adsense";

const Home = () => {
  return (
    <>
      <Hero hero="homeHero">
        {/* <Banner title="Tovlo" subtitle="The trip you need" >
            <Link to ="/trips" className="btn-primary">
                Trips
            </Link>
            </Banner> */}
      </Hero>
      <Services />
      <FeaturedTrips />
      <AdSence.Google
        className="adsbygoogle"
        style={{ display: "block" }}
        format="fluid"
        layoutKey="-7r+eu-z-1k+6t"
        client="ca-pub-7305486482263598"
        slot="4597530725"
      />
    </>
  );
};
export default Home;
