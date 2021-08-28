import React from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Banner } from "../componenets/Banner";
import { Link, useParams } from "react-router-dom";
import { TripContext } from "../Context";
import { useContext, useState } from "react";
import StyledHero from "../componenets/StyledHero";

const TripDetails = () => {
  const context = useContext(TripContext);

  let params = useParams();
  const { getTrip } = context;
  const trip = getTrip(params.slug);
  if (!trip) {
    return <div className="error">No such room found.</div>;
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = trip;

  return (
      <>
    <StyledHero img={images[0] || defaultBcg}>
      <Banner title={`${name} trip`}>
        <Link to="/trips" className="btn-primary">
          {" "}
          back to trips
        </Link>
      </Banner>
    </StyledHero>
    <section className="single-room">
        <div className="single-room-images">
            {images.map((item,index)=> {
                return <img key={index} src={item} alt={name}/>
            })}
        </div>
    </section>

    </>
  );
};

export default TripDetails;
