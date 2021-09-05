import React from "react";
import TripFilter from "./TripFilter";
import { TripContext } from "../Context";
import Loading from "./Loading";
import { useContext, useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import styled from "styled-components";
import { acc_type_meta } from "../data";

const TripContainer = ({ searchString }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const context = useContext(TripContext);
  const { loading, trips } = context;

  const [tripFilter, setTripFilter] = useState({
    type: "all",
    org: [],
    acc_type: [],
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    breakfast: false,
    pets: false,
  });
  useEffect(() => {
    let maxPrice = Math.max(...trips.map((item) => item.plan.price));
    setTripFilter({
      ...tripFilter,
      price: maxPrice,
      maxPrice,
      org: trips.map((a) => {
        return { name: a.org.org_name, isChecked: true };
      }),
      acc_type: Object.values(acc_type_meta).map((a) => {
        return { name: a, isChecked: true };
      }),
    });
  }, [trips]);

  const handleChange = (event) => {
    const target = event.target;
    if (target.type === "checkbox") {
      let value = target.checked;
      let [group, name] = target.name.split("*");
      setTripFilter({
        ...tripFilter,
        [group]: tripFilter[group].map((el) =>
          el.name === name ? { ...el, isChecked: value } : el
        ),
      });
    } else {
      let name = event.target.name;
      let value = target.value;
      setTripFilter({ ...tripFilter, [name]: value });
    }
  };

  if (loading) {
    return <Loading />;
  }

  const filterTrips = () => {
    let { type, capacity, org, acc_type } = tripFilter;
    let tempTrips = [...trips];
    // transform values
    capacity = parseInt(capacity);
    // filter by type
    if (type !== "all") {
      tempTrips = tempTrips.filter((trip) => trip.type === type);
    }
    // filter by capacity
    if (org.length > 0) {
      tempTrips = tempTrips.filter((trip) =>
        org
          .filter((o) => o.isChecked === true)
          .map((o) => o.name)
          .includes(trip.org.org_name)
      );
    }
    if (acc_type.length > 0) {
      console.log(tempTrips);

      tempTrips = tempTrips.filter((trip) =>
        acc_type
          .filter((o) => o.isChecked === true)
          .map((o) => o.name)
          .includes(trip.plan.acc_type)
      );
    }
    if (capacity !== 1) {
      tempTrips = tempTrips.filter((trip) => trip.capacity >= capacity);
    }
    if (searchString) {
      tempTrips = tempTrips.filter((trip) =>
        trip.search_context.includes(searchString.toLowerCase())
      );
    }
    return tempTrips;
  };
  return (
    <TripContainerSection>
      <div className="trips-container">
        <TripFilter tripFilter={tripFilter} handleChange={handleChange} />
        <SearchResults
          setSelectedLocation={setSelectedLocation}
          results={filterTrips()}
        />
      </div>
    </TripContainerSection>
  );
};

export default TripContainer;
const TripContainerSection = styled.header`
  .trips-container {
    display: flex;
    justify-content: center;
  }
`;
