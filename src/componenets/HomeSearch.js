import React from "react";
import { FaSearch } from "react-icons/fa";
const HomeSearch = () => {
  return (
    <div class="input-wrapper">
      <input type="text" placeholder="Search" className="homeSearch" />
      <FaSearch size="30px" />
    </div>
  );
};

export default HomeSearch;
