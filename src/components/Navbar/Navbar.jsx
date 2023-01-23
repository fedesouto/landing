import React, { useState } from "react";
import Burger from "./Burger";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="container" style={{ justifyContent: "space-between"}}>
      <h1>Logo</h1>
      <nav>
          <Burger isActive={isActive} setIsActive={setIsActive} />
        <ul className={`menu container ${isActive?'active':''}`}>
          <li>Home</li>
          <li>Servicios</li>
          <li>Nosotros</li>
          <li>Contactanos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
