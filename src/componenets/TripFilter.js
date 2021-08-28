import React from "react";
import { useContext } from "react";
import { TripContext } from "../Context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
const TripFilter = ({ trips ,tripFilter, handleChange}) => {
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    MaxSize,
    breakfast,
    pets,
  } = tripFilter;

  let types = getUnique(trips, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(trips, "capacity");
  people = people.map((item,index)=>{
      return <option value={item} key={index}>{item}</option>
  })
  return (
    <section className="filter-container">
      <Title title="search trips" />
      <form className="filter-form">
        {/* select type */}
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
        {/* end of select type */}
        {/* select guests */}
        <div className="form-group">
          <lable htmlFor="capacity">Guests</lable>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        
      </form>
    </section>
  );
};

export default TripFilter;
