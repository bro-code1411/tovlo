import styled from "styled-components";
import { Search, Globe, Menu, User } from "react-feather";
import { useRef, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

const Header = ({ placeholder }) => {
  const navRef = useRef(null);
  const history = useHistory();
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const locationHook = useLocation();
  const [location, setLocation] = useState("");
  const primaryLocationRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) {
      primaryLocationRef.current.focus();
      return;
    }
    history.push({
      pathname: "/search",
      searchString: location,
    });
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HeaderSection
      ref={headerRef}
      className={[
        scrolled || inputFocus || locationHook.pathname !== "/"
          ? "scrolled"
          : null,
        inputFocus ? "inputFocus" : null,
      ]}
    >
      <div className="headerInner">
        <div
          className="logo"
          onClick={() => {
            history.push("/");
          }}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 788.000000 418.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M5070 2145 l0 -1745 185 0 185 0 0 1745 0 1745 -185 0 -185 0 0 -1745z"
                fill="currentColor"
              />
              <path
                d="M690 3260 l0 -430 -205 0 -205 0 0 -85 0 -85 205 0 204 0 3 -962 3 -963 24 -70 c30 -89 63 -146 109 -186 44 -39 138 -83 210 -98 66 -14 295 -14 382 -1 121 19 110 7 110 118 l0 97 -162 0 c-154 0 -165 1 -206 24 -50 29 -64 49 -88 122 -17 50 -18 123 -22 987 l-3 932 240 0 241 0 0 85 0 85 -240 0 -240 0 0 430 0 430 -180 0 -180 0 0 -430z"
                fill="currentColor"
              />
              <path
                d="M2190 2865 c-244 -49 -375 -143 -469 -335 -93 -191 -110 -308 -118 -805 -7 -448 6 -679 48 -847 17 -67 44 -150 59 -183 34 -70 122 -174 191 -227 95 -71 286 -117 489 -117 203 0 393 46 489 117 65 49 169 174 197 237 12 28 36 106 53 174 42 167 55 397 48 846 -8 494 -25 614 -116 801 -57 116 -118 189 -199 238 -70 42 -183 83 -280 102 -91 17 -304 17 -392 -1z m349 -202 c74 -23 134 -80 176 -166 77 -156 100 -400 92 -972 -10 -666 -59 -856 -245 -946 -65 -31 -228 -39 -305 -14 -235 77 -296 335 -284 1198 7 500 28 646 112 774 70 107 145 142 301 143 69 0 119 -5 153 -17z"
                fill="currentColor"
              />
              <path
                d="M6351 2865 c-163 -37 -299 -102 -365 -176 -47 -53 -125 -195 -157 -287 -33 -94 -49 -232 -60 -507 -10 -270 -5 -632 12 -817 12 -134 51 -292 94 -383 44 -92 153 -210 233 -253 107 -57 226 -83 407 -89 138 -4 174 -2 265 17 121 25 222 64 278 109 53 42 144 154 176 218 43 86 85 279 97 447 13 179 6 932 -10 1056 -15 116 -35 188 -77 283 -93 213 -195 301 -426 368 -97 28 -369 36 -467 14z m348 -201 c92 -27 168 -113 211 -238 47 -138 55 -247 55 -776 0 -515 -6 -619 -45 -787 -35 -148 -92 -233 -188 -280 -49 -24 -72 -28 -162 -31 -90 -3 -114 -1 -164 18 -71 27 -133 81 -170 149 -34 63 -71 228 -88 391 -17 169 -17 904 0 1060 35 313 106 446 265 496 60 18 222 17 286 -2z"
                fill="currentColor"
              />
              <path
                d="M3213 2808 c3 -13 156 -560 339 -1215 l332 -1193 216 0 216 0 309 1203 c169 661 310 1208 313 1215 3 9 -35 12 -171 12 -131 0 -176 -3 -179 -12 -3 -7 -112 -491 -243 -1076 -132 -584 -242 -1059 -246 -1055 -3 5 -125 488 -270 1075 l-264 1068 -179 0 -178 0 5 -22z"
                fill="currentColor"
              />
            </g>
          </svg>
          {/* <span>tovlo</span> */}
        </div>
        <nav ref={navRef}>
          <a href="#" className="active">
            Trip
          </a>
          <a href="#">Hiking</a>
          <a href="#">Tourist</a>
        </nav>
        <MobileNav />
        <form className="search">
          <input
            type="text"
            ref={primaryLocationRef}
            placeholder={placeholder ? placeholder : "Where are you going?"}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={inputFocus && !location}
            onClick={handleSubmit}
            aria-label="search places"
          >
            <Search />
            <span>Search</span>
          </button>
        </form>

        <div className="profile">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSctnJxmL8pLMqKg15ZteoiwM0nTkDCtxPuAYbbxRz8-sUgAGg/viewform?vc=0&c=0&w=1&flr=0"
            rel="noopener noreferrer"
            target="_blank"
          >
            Become a host
          </a>
          <ThemeToggle icon />
          <a href="#" className="globe">
            <Globe />
          </a>
          <div className="user">
            <Menu className="menu" />
            <User className="userIcon" />
          </div>
        </div>
      </div>
    </HeaderSection>
  );
};
export default Header;

const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  color: #fafafc;
  padding: 1.5rem var(--sidePadding);
  width: 100%;
  z-index: 10;
  transition: background 0.2s, border-bottom 0.2s;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--light);
    border-radius: 99px;
    display: flex;
    align-items: center;
    left: 0;
    top: 0;
    transition: all 0.2s;
    label,
    input,
    .guestNumber {
      background: none;
      font-size: 14px;
      border: none;
      line-height: 1.5;
      display: block;
      color: var(--dark);
      outline: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    input {
      width: 100%;
      font-weight: 700;
      &::placeholder {
        color: var(--dark);
        font-weight: 400;
        opacity: 0.5;
      }
    }
    .guestNumber {
      font-weight: 700;
      .empty {
        color: var(--dark);
        font-weight: 400;
        opacity: 0.5;
      }
    }
    .field {
      width: 100%;
      padding: 0.5rem 1.5rem;
      border-radius: 99px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: background 0.2s;
      position: relative;
      & + .field::before {
        position: absolute;
        content: "";
        width: 2px;
        height: 2rem;
        background: var(--gray);
        border-radius: 2px;
        left: 0;
        transition: transform 0.2s;
      }
      &:hover,
      &:focus-within {
        background: var(--gray);
      }
      &:last-of-type {
        padding-right: 10rem;
      }
    }
  }
  .overlay:hover .field::before,
  .overlay:focus-within .field::before {
    transform: scale(0);
  }
  .user,
  .profile,
  .logo,
  .globe,
  nav {
    display: flex;
    align-items: center;
  }
  .headerInner {
    max-width: var(--containerWidth);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }
  & > div {
    flex: 0 0 20%;
  }
  nav {
    flex: 1;
    justify-content: center;
    transition: all 0.2s;
    a + a {
      margin-left: 1.5rem;
    }
    a {
      position: relative;
    }
    a::before {
      position: absolute;
      content: "";
      width: 1.5rem;
      height: 2px;
      border-radius: 2px;
      background: var(--light);
      bottom: -0.5rem;
      left: calc(50% - 0.75rem);
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.2s;
    }
    a:hover::before,
    a.active::before {
      transform: scaleX(1);
    }
  }
  .logo {
    cursor: pointer;
    svg {
      height: 2rem;
      color: #fafafc;
      transition: color 0.2s;
    }
    span {
      font-weight: 600;
      font-size: 1.15rem;
      margin-left: 0.5rem;
    }
  }
  .profile {
    justify-content: flex-end;
    white-space: nowrap;
    svg {
      height: 1.15rem;
    }
    a,
    .themeToggle {
      margin-right: 1.5rem;
    }
    .userIcon {
      background: var(--red);
      border-radius: 99px;
      height: 1.5rem;
      width: 1.5rem;
      color: #fafafc;
    }
    .user {
      background: #fafafc;
      border-radius: 99px;
      padding: 0.25rem 0.25rem 0.25rem 0.5rem;
    }
    .menu {
      color: var(--red);
      margin-right: 0.5rem;
    }
  }
  form {
    position: absolute;
    transform: translate(-50%, 150%);
    left: 50%;
    top: -1rem;
    background: var(--light);
    padding: 0.5rem;
    border-radius: 99px;
    display: flex;
    align-items: center;
    max-width: 720px;
    margin: 1.5rem 0;
    width: 60vw;
    box-shadow: 0 1rem 3rem -1rem #1e1e38;
    transition: all 0.2s;
    transform-origin: center;
    & * {
      transition: all 0.2s;
    }
    & > input {
      background: none;
      border: none;
      font-size: 1.15rem;
      flex: 1;
      padding: 0 1.5rem;
      color: var(--dark);
      outline: none;
      &::placeholder {
        color: var(--dark);
        opacity: 0.6;
      }
    }
    & > button {
      background: var(--red);
      color: #fafafc;
      border: none;
      padding: 0.5rem calc(1.75rem / 2);
      height: 3rem;
      max-width: 300px;
      display: flex;
      align-items: center;
      border-radius: 99px;
      font-weight: 700;
      font-size: 1rem;
      overflow: hidden;
      z-index: 2;
      &:hover:not(:disabled) {
        box-shadow: 0 0 0 2px var(--white), 0 0 0 4px var(--red);
      }
      &:disabled {
        opacity: 0.5;
      }
    }
    & > button svg {
      height: 1.25rem;
      margin-right: 0.75rem;
      flex: 0 0 1.25rem;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  @media (max-width: 36rem) {
    .profile,
    .logo,
    nav,
    form > button span {
      display: none;
    }
    .overlay {
      display: none;
    }
    .headerInner {
      grid-template-columns: 1fr;
    }
    form {
      position: relative;
      transform: none !important;
      width: 100% !important;
      left: unset;
      top: 0;
      margin: 0;
      & > input {
        padding: 0 1rem;
        font-size: 1rem;
      }
      & > button {
        width: 2.5rem;
        height: 2.5rem;
        padding: 0 0.6rem;
      }
      & > button svg {
        height: 1rem;
        width: 1rem;
      }
    }
  }
  @media (min-width: 36rem) and (max-width: 62.5rem) {
    nav {
      display: none;
    }
    .headerInner {
      grid-template-columns: 1fr 1fr;
    }
  }
  &.scrolled:not(.inputFocus) {
    background: var(--light);
    color: var(--dark);
    border-bottom: 2px solid var(--gray);
    .overlay {
      opacity: 0;
      pointer-events: none;
    }
    nav {
      opacity: 0;
      pointer-events: none;
    }
    .logo svg {
      color: var(--red);
    }
    .user {
      box-shadow: 0 0 0 2px var(--gray);
    }
    form {
      box-shadow: 0 0 0 2px var(--gray);
      transform: translate(-50%, 0.125rem) scale(0.83);
      width: 480px;
      & > button {
        max-width: 3rem;
      }
      & > button span {
        opacity: 0;
      }
    }
    @media (max-width: 36rem) {
      padding-top: 1rem;
      padding-bottom: 1rem;
      form {
        padding: 0;
        box-shadow: none;
        background: var(--gray);
      }
    }
    @media (min-width: 36rem) and (max-width: 62.5rem) {
      .profile {
        opacity: 0;
        pointer-events: none;
      }
      form {
        left: auto;
        right: 0;
        transform: translate(0, 0.125rem) scale(0.83);
        width: 50%;
      }
    }
  }
  &.inputFocus {
    color: var(--dark);
    .logo svg {
      color: var(--red);
    }
    form {
      background: var(--light);
      width: 100%;
      box-shadow: 0 1rem 1.5rem -0.5rem #0001;
    }
  }
`;
