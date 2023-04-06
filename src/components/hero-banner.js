import React from "react";

export const HeroBanner = () => {
  //const logo = "https://cdn.auth0.com/blog/developer-hub/react-logo.svg";
  const logo = "https://i.imgur.com/Xxu49Nh.png";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">VR Nursing Headline</h1>
      <p className="hero-banner__description">
        This is the website interface for the CSUN <strong>Nursing VR</strong> project. Welcome to the Home Page!
      </p>
      <a
        href="/about"
        className="button button--secondary"
      >
        Meet the Team →
      </a>
    </div>
  );
};
