import { useEffect, useContext } from "react";
import { Sun, Moon } from "react-feather";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = ({ text, icon, className }) => {
  const theme = useContext(ThemeContext);

  const { isDark, setIsDark } = theme;

  return (
    <Container
      className={`${className} themeToggle`}
      onClick={() => setIsDark((isDark) => !isDark)}
    >
      {icon && (
        <> {isDark ? <Sun className="sun" /> : <Moon className="moon" />} </>
      )}
      {text && "Switch Theme"}
    </Container>
  );
};

export default ThemeToggle;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: fit-content;
  cursor: pointer;
`;
