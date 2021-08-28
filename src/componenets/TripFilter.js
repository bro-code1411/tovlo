import React from "react";
import { useContext } from "react";
import { TripContext } from "../Context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
const TripFilter = ({ trips }) => {
  const context = useContext(TripContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    MaxSize,
    breakfast,
    pets,
  } = context;

  let types = getUnique(trips, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search trips" />
      <form className="filter-form">
        {}
        <div className="form-group">
          <lable htmlFor="type">room type</lable>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  );
};

export default TripFilter;
