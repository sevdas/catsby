import React from "react";
import Logo from "../assets/Catsby.png";

const logoStyle = {
  width: "10rem",
  height: "auto",
};

const Header = () => {
  return (
    <div style={{ margin: "1rem 0 2rem 1rem" }}>
      <img src={Logo} alt="catsby logo url" style={logoStyle} />
      <h1>My genuineness as a home cat.</h1>
    </div>
  );
};

export default Header;
