import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";
import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TripContext } from "../Context";
import Loading from "../components/Loading";
import TripFilter from "../components/TripFilter";
import TripContainer from "../components/TripContainer";

const Search = () => {
  const location = useLocation();
  const searchString = location.searchString;

  return (
    <>
      <Header placeholder={searchString} />
      <main>
        <TripContainer searchString={location.searchString} />
      </main>
      <Footer />
    </>
  );
};
export default Search;
