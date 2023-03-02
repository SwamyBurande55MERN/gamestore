import React from "react";
import "./MainPage.css";
import backgroundImageGTA from "../images/GTAVmain.jpeg";
import Logo from "../images/gta-5-city-8.png";
import RockStarLogo from "../images/RockstarLogo.png";

const MainPage = () => {
  return (
    <>
      <section className="background">
        <img
          src={backgroundImageGTA}
          alt="backgroundImg"
          height="auto"
          width="100%"
        />
        <section id="LogoImage">
          <img src={Logo} alt="gameLogo" height="300px" width="300px" />
        </section>
        <img src={RockStarLogo} alt="logoRStar" id="RockstarLogo" />
        <h2 id="LosSantosHeading"> WELCOME TO LOS-SANTOS </h2>
        <p id="description">
        When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other.
        </p>
        <button id="buyNowButton">BUY NOW</button>
      </section>
    </>
  );
};

export default MainPage;
