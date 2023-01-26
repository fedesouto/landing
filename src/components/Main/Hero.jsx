import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__title" >Elevá tu marca <br/> con un sitio web a medida.</h1>
      <p className="hero__text">
      Transformá tu presencia en línea con nuestros servicios expertos en desarrollo web.
      </p>
      <div>
        <button className="btn primary">Conocé nuestros servicios</button>
      </div>
      <div>
        <button className="btn outlined">Quiero mi web</button>
      </div>
    </div>
  );
};

export default Hero;
