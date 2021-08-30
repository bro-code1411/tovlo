import React from "react";
import Trip from "./Trip";

const TripList = ({ trips }) => {
  if (trips.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no trips matched your search parameters</h3>
      </div>
    );
  }
  // return (
  //   <section className="roomslist">
  //     <div className="roomslist-center">
  //       {trips.map((item) => {
  //         return <Trip key={item.id} trip={item} />;
  //       })}
  //     </div>
  //   </section>
  // );

  return (
    <section className="flex">
      <section className="filter-container">
        <p className="filter-para">500 Trips for 5 guest </p>
        <h1 className="filter-heading">Trips in Kheerganga</h1>
        <div className="filter-row">
          <div className="filter-button">Cancellation Flexibility</div>
          <div className="filter-button">Accomodation Type</div>
          <div className="filter-button">Travel Type</div>
          <div className="filter-button">Price</div>
          <div className="filter-button">More filters</div>
        </div>
        {trips.map((item) => {
          return <Trip key={item.id} trip={item} />;
        })}
      </section>
    </section>
  );
};

export default TripList;
