import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { StarIcon } from "@heroicons/react/solid";
import { acc_type, transport_type } from "../data";

const Trip = ({ trip }) => {
  const {
    plan: { name },
    plan: { description },
    plan: { slug },
    images,
    plan: { price },
    plan: { rating },
    plan: { duration_days },
    plan: { duration_nights },
    plan: { acc_type_id },
    plan: { transport_type_id },
  } = trip;
  return (
    <Link to={`/trips/${slug}`}>
      <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t rounded-xl">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrin-0">
          <img
            src={images[0] || defaultImg}
            className="rounded-xl"
            alt="Trip_photo"
          />
        </div>

        <div className="flex flex-col flex-grow pl-5">
          <div className="flex justify-between">
            <h4 className="text-xl">{name}</h4>
          </div>

          <p className="text-sm">{description[0]}</p>

          <div className="border-b w-10 pt-2" />
          <p className="pt-2 text-sm text-gray-500 flex-grow">
            [ Stay: {acc_type[acc_type_id]} ] [ Duration: {duration_days}D-
            {duration_nights}N ] [ Transport:{" "}
            {transport_type[transport_type_id]} ]
          </p>

          <div className="flex justify-between items-end pt-1">
            <p className="flex items-center">
              <StarIcon className="h-5 text-red-400" /> {rating}
            </p>

            <div>
              <p className="text-lg lg:text-2xl font-semibold pb-2">
                Rs.{price}
              </p>
              <p className="text-right font-extralight">per person</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
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
