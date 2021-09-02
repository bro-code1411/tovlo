import styled from "styled-components";
import heroImg from "../images/hero.jpg";
import heroImgSm from "../images/hero-sm.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <HeroSection className="light hero">
      <div className="heroInner">
        <span>
          <h1>The Perfect Trip You Deserve</h1>
          <Link to="/search">
            <a href="#" className="btn btn-light">
              Explore Now
            </a>
          </Link>
        </span>
      </div>
    </HeroSection>
  );
};
export default Hero;

const HeroSection = styled.section`
  background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),
    url(${heroImg});
  background-position: center, bottom left;
  background-size: cover, cover;
  height: fit-content;
  color: var(--light);
  padding: 15rem var(--sidePadding) 6rem;
  .heroInner {
    display: flex;
    max-width: var(--containerWidth);
    margin: 0 auto;
  }
  span {
    max-width: var(--maxWidth);
  }
  h1 {
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 36rem) {
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(${heroImgSm});
    background-position: center, bottom left;
    background-size: cover, cover;
    align-items: flex-start;
    padding-top: 7.5rem;
    height: 75vh;
    max-height: 720px;
  }
`;
