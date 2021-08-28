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
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {trips.map((item) => {
          return <Trip key={item.id} trip={item} />;
        })}
      </div>
    </section>
  );
};

export default TripList;
