import styled from "styled-components";
import bannerImg from "../images/host.jpg";
import bannerImgSm from "../images/host-sm.jpg";

const Banner = () => {
  return (
    <HostingSection className="light">
      <span>
        <h2>Trip Organizer</h2>
        <p>Share your trips with the amazing FindYourTrip community.</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSctnJxmL8pLMqKg15ZteoiwM0nTkDCtxPuAYbbxRz8-sUgAGg/viewform?vc=0&c=0&w=1&flr=0"
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-light"
        >
          Learn more
        </a>
      </span>
    </HostingSection>
  );
};

export default Banner;

const HostingSection = styled.section`
  padding: 6rem var(--sidePadding);
  background: url(${bannerImg});
  background-size: cover;
  background-position: 33% center;
  border-radius: 1rem;
  color: var(--light);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
    font-weight: 800;
  }
  span {
    max-width: var(--maxWidth);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  p {
    margin-bottom: 1.5rem;
  }
  @media (max-width: 36rem) {
    aspect-ratio: 0.75;
    background: url(${bannerImgSm});
    background-size: cover;
    background-position: center;
    position: relative;
    h2 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0.5rem;
    }
    span {
      position: absolute;
      padding: 0 var(--sidePadding);
      height: 50%;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
    }
  }
`;
