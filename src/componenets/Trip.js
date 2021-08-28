import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

const Trip = ({ trip }) => {
  const { name, slug, images, price } = trip;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="trip_photo" />
        <div className="price-top">
          <h6>Rs.{price}</h6>
        </div>
        <Link to={`/trips/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

Trip.propTypes = {
  trip: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Trip;
