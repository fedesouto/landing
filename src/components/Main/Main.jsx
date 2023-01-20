import React from "react";
import Clients from "./Clients";
import Hero from "./Hero";

const Main = () => {
    return(
        <div>
        <div className="main container">
            <Hero />
            <div className="container" style={{width: '31vw', height: '100%', border: '1px black solid'}}>
                Alguna imagen o algo
            </div>
        </div>
        <Clients />
        </div>
    )
}

export default Main;