// Footer.js
import BottomNavigation from "@mui/material/BottomNavigation";
import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#FFF6B7",
      }}
    >
      <p className="footer-content">Big Spoon Lil' Spoon 2024</p>
    </BottomNavigation>
  );
};

export default Footer;
