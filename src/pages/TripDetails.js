import React from "react";
import defaultBcg from "../images/defaultBcg.jpeg";
import { BannerError } from "../components/BannerError";
import { Link, useParams } from "react-router-dom";
import { TripContext } from "../Context";
import { useContext } from "react";
import StyledHero from "../components/StyledHero";

const TripDetails = () => {
  const context = useContext(TripContext);

  let params = useParams();
  const { getTrip } = context;
  const trip = getTrip(params.slug);
  if (!trip) {
    return <div className="error">No such room found.</div>;
  }

  const {
    plan: { name },
    capacity,
    size,
    plan: { price },
    plan: { description },
    images,
    itinerary,
  } = trip;
  const [mainImg, ...defaultImg] = images;

  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <BannerError title={`${name} trip`}>
          <Link to="/trips" className="btn-primary">
            {" "}
            back to trips
          </Link>
        </BannerError>
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
            <h6>
              capacity:{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            {/* <h6>{pets ? "pets allowed" : "pets not allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6> */}
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Itinerary</h6>
        {itinerary.day_info.map((item, index) => {
          return (
            <>
              <h6>Day {item.day}</h6>
              <ul className="extras">
                {item.activities.map((item, index) => {
                  return <li key={index}>-{item}</li>;
                })}
              </ul>
            </>
          );
        })}
      </section>
    </>
  );
};

export default TripDetails;
