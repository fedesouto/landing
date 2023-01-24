import React from "react";
import Clients from "./Clients";
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
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3727526-3135828.png" alt="" />
        </div>
      </div>
      <Clients />
    </div>
  );
};

export default Main;
