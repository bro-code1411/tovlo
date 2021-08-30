import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const Trip = ({ trip }) => {
  const { name, slug, images, price } = trip;
  return (
    <Link to={`/trips/${slug}`} >
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrin-0">
        <img src={images[0] || defaultImg} layout = "fill" objectFit="cover"/>
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{name}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{name}</h4>

        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{name}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" /> 1
          </p>
        
          <div>
           <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
           <p className="text-right font-extralight">{slug}</p>
          </div> 
        </div>
      </div>
    </div>
    </Link>
  )
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
