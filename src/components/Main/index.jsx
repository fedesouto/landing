import React from "react";
import Clients from "./Clients";
import Features from "./Features";
import Hero from "./Hero";

const Main = () => {
  return (
    <div>
      <div className="main container">
        <Hero />
      </div>
      <Features />
      <Clients />
    </div>
  );
};

export default Main;
