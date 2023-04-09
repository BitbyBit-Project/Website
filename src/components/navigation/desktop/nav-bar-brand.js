import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          //src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg" // default logo displayed in the navbar. yep.

          // NVR logo - top and bottom: https://i.imgur.com/Xxu49Nh.png
          // NVR logo - top only: https://i.imgur.com/SjcjdEc.png
          src="https://i.imgur.com/SjcjdEc.png" 
          alt="Nursing Virtual Reality logo"
          width="80"
          height="100"
        />
      </NavLink>
    </div>
  );
};
