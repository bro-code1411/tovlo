import React from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Banner } from "../componenets/Banner";
import { Link, useParams } from "react-router-dom";
import { TripContext } from "../Context";
import { useContext } from "react";
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
const [mainImg, ...defaultImg] =images;

  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} trip`}>
          <Link to="/trips" className="btn-primary">
            {" "}
            back to trips
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : Rs{price}</h6>
            <h6>size: {size}</h6>
            <h6>capacity: {capacity >1?`${capacity} people`:`${capacity} person`}</h6>
            <h6>{pets ? "pets allowed":"pets not allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item,index)=>{
            return <li key={index} >-{item}</li>
          })}
        </ul>
      </section>
    </>
  );
};

export default TripDetails;
