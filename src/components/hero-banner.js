import React from "react";

export const HeroBanner = () => {
  //const logo = "https://cdn.auth0.com/blog/developer-hub/react-logo.svg";
  const logo = "https://i.imgur.com/SjcjdEc.png"; // NVR logo - top only

  return (
    <div className="hero-banner hero-banner--blue-aqua">
      <div className="hero-banner__logo">
        <img src={logo} alt="Nursing Virtual Reality logo" />
      </div>
      <h1 className="hero-banner__headline">Nursing Virtual Reality</h1>
      <p className="hero-banner__description">
        This is the website interface for the CSUN <strong>Nursing VR</strong> project. Welcome to the Home Page!
      </p>

      <p>
      <a style={{ display: 'block'}}
        href="/about"
        className="button button--secondary"
      >
        Meet the Team!
      </a>
      </p>
    </div>
  );
};
