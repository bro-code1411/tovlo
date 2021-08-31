import React from "react";
import homeBgImg from "../images/home-bg.jpg";
import Services from "../componenets/Services";
import FeaturedTrips from "../componenets/FeaturedTrips";
import AdSence from "react-adsense";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="relative ">
        <img
          src={homeBgImg}
          className="w-full h-300 sm:h-400 lg:h-500 xl:h-600 2xl:h-700 object-cover"
          alt="home_bg"
        />
        <div className="absolute top-1/2 w-full text-center">
          <p className="text-sm sm:text-lg">Not sure where to go.</p>
          <Link to="/trips">
            <button
              className="text-purple-500 bg-white px-10 py-4
         shadow-mv rounded-full font-bold my-3 hover:shadow-xl
         active:scale-90 transition duration-150"
            >
              I'm flexible
            </button>
          </Link>
        </div>
      </div>
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
