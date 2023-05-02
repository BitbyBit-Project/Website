import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = () => {
  const { isAuthenticated } = useAuth0();
  
  return (
    <div className="nav-bar__tabs">
      
      <NavBarTab path="/about" label="About" />
      <NavBarTab path="/contact" label="Contact" />
      <NavBarTab path="/resources" label="Resources" />
      <NavBarTab path="/cardiosetup" label="Cardio Setup" />

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
