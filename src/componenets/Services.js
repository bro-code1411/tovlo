import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { useState } from "react";
const Services = () => {
  //eslint-disable-next-line
  const [services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info: "Complete information will be available soon.",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "Complete information will be available soon.",
    },
    {
      icon: <FaShuttleVan />,
      title: "Comfortable Travel",
      info: "Complete information will be available soon.",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info: "Complete information will be available soon.",
    },
  ]);

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item) => {
          return (
            <article key={`item-${item.title}`} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
