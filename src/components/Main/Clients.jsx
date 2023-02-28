import React from "react";
import { IoLogoReact, IoLogoNodejs, IoLogoPython, IoLogoGithub, IoLogoFigma, IoLogoWordpress } from "react-icons/io5";

const Clients = () => {
    const clientes = [
        {nombre: "React", logo:<IoLogoReact/>},
        {nombre: "NodeJS", logo:<IoLogoNodejs/>},
        {nombre: "Python", logo:<IoLogoPython/>},
        {nombre: "Github", logo:<IoLogoGithub/>},
        {nombre: "Figma", logo:<IoLogoFigma/>},
        {nombre: "Wordpress", logo:<IoLogoWordpress/>},
]
    return(
        <div className="clients__container">
            <div className="container" style={{justifyContent: 'space-between'}}>
            {clientes.map((cliente, index) => <div className="client" key={index}>{cliente.logo}</div>)}
            </div>
        </div>
    )
}

export default Clients;