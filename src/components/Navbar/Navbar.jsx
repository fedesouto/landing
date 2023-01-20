import React from "react";

const Navbar = () => {
    return(
        <header className="container" style={{justifyContent: 'space-between'}}>
            <h1>
                Logo
            </h1>
            <nav>
                <ul className="menu container">
                    <li>Home</li>
                    <li>Servicios</li>
                    <li>Nosotros</li>
                    <li>Contactanos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;