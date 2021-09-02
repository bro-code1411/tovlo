import React from "react";

const TripList = ({ trips, searchString }) => {
  if (trips.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no trips matched your search parameters</h3>
      </div>
    );
  }
  console.log(searchString);
  return (
    <section className="flex">
      <section className="filter-container">
        <p className="filter-para">500 Trips for 5 guest </p>
        <h1 className="filter-heading">
          {searchString ? `Trips in  ${searchString}` : `Recomended Trips`}
        </h1>
        <div className="filter-row">
          <div className="filter-button">Cancellation Flexibility</div>
          <div className="filter-button">Accomodation Type</div>
          <div className="filter-button">Travel Type</div>
          <div className="filter-button">Price</div>
          <div className="filter-button">More filters</div>
        </div>
        {/* {trips.map((item) => {
          // return <Trip key={item.id} trip={item} />;
        })} */}
      </section>
    </section>
  );
};

export default TripList;
