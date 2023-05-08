import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { MobileNavBarTab } from "./mobile-nav-bar-tab";

export const MobileNavBarTabs = ({ handleClick }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/about"
        label="About"
        handleClick={handleClick}
      />
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/artifacts"
        label="Artifacts"
        handleClick={handleClick}
      />
      <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/tech"
        label="Technology"
        handleClick={handleClick}
      />
      <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/contact"
        label="Contact"
        handleClick={handleClick}
      />
      {isAuthenticated && (
        <>
          <MobileNavBarTab
        path="/profile"
        label="Profile"
        handleClick={handleClick}
      />
          <MobileNavBarTab
            path="/protected"
            label="Protected"
            handleClick={handleClick}
          />
          <MobileNavBarTab
            path="/admin"
            label="Admin"
            handleClick={handleClick}
          />
        </>
      )}
    </div> </div> </div> </div>
  );
};