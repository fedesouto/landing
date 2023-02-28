import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="container" style={{ justifyContent: "space-between"}}>
      <Link to='/'><Logo/></Link>
      <nav>
          <Burger isActive={isActive} setIsActive={setIsActive} />
        <ul className={`menu container ${isActive?'active':''}`}>
          <li><Link to='/' onClick={()=>setIsActive(false)}>Home</Link></li>
          <li><Link to='/services' onClick={()=>setIsActive(false)}>Servicios</Link></li>
          <li><Link to='/faq' onClick={()=>setIsActive(false)}>Preguntas Frecuentes</Link></li>
          <li><Link to='/contact' onClick={()=>setIsActive(false)}>Contactanos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
