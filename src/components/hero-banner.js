import React from "react";

export const HeroBanner = () => {
  const logo = "https://cdn.auth0.com/blog/developer-hub/react-logo.svg";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Hello, World!</h1>
      <p className="hero-banner__description">
        This is the website interface for the CSUN <strong>Nursing VR</strong> project. This website and its functionality are current under construction, so please check back later!
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
