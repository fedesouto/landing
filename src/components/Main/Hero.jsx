import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">Lorem ipsum <br />dolor sit, amet consectetur.</h1>
      <p className="hero__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ex.
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
