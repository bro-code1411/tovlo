import React from "react";
import ErrorHero from "../components/ErrorHero";
import { BannerError } from "../components/BannerError";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <ErrorHero>
      <BannerError title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </BannerError>
    </ErrorHero>
  );
};

export default Error;
