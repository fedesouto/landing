import React from "react";
import Clients from "./Clients";
import Features from "./Features";
import Hero from "./Hero";

const Main = () => {
  return (
    <div>
      <div className="main container">
        <Hero />
        <div
          className="container"
          style={{
            width: "31vw",
            height: "100%",
          }}
        >
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3727526-3135828.png" alt="" style={{maxWidth: '100vw', height: 'auto'}}/>
        </div>
      </div>
      <Clients />
      <Features />
    </div>
  );
};

export default Main;