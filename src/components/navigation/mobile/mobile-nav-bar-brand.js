import React from "react";
import { NavLink } from "react-router-dom";

export const MobileNavBarBrand = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img

          // NVR logo - top and bottom: https://i.imgur.com/Xxu49Nh.png
          // NVR logo - top only: https://i.imgur.com/SjcjdEc.png
          
          className="mobile-nav-bar__logo"
          src="https://i.imgur.com/SjcjdEc.png" // logo displayed in the navbar. yep.
          alt="Nursing Virtual Reality logo"
          width="62"
          height="24"
        />
      </NavLink>
    </div>
  );
};
