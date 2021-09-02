import React from "react";

const ErrorHero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

ErrorHero.defaultProps = {
  hero: "defaultHero",
};
export default ErrorHero;
