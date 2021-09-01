import React from "react";
import { TripContext } from "../Context";
import { useContext } from "react";
import Loading from "./Loading";
import Trip from "./Trip";
import Title from "./Title";

const FeaturedTrips = () => {
  const context = useContext(TripContext);
  const { loading, featuredTrips: trips } = context;
  const featuredTrips = trips.map((trip) => {
    return <Trip key={trip.id} trip={trip} />;
  });
  return (
    <section className="featured-rooms">
      <Title title="featured trips" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : featuredTrips}
      </div>
    </section>
  );
};

export default FeaturedTrips;
