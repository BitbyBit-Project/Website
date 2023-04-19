import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = () => {
  const { isAuthenticated } = useAuth0();

  //<NavBarTab path="/public" label="Public" />
  
  return (
    <div className="nav-bar__tabs">
      
      <NavBarTab path="/about" label="About" />
      <NavBarTab path="/contact" label="Contact" />
      {isAuthenticated && (
        <>
          <NavBarTab path="/profile" label="Profile" />
          <NavBarTab path="/admin" label="Admin" />
          <NavBarTab path="/gradesheet" label="Grade Sheet" />
        </>
      )}
    </div>
  );
};