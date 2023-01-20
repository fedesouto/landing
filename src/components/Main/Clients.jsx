import React from "react";

const Clients = () => {
    const clientes = [
        {nombre: "Cliente1", logo:""},
        {nombre: "Cliente2", logo:""},
        {nombre: "Cliente3", logo:""},
        {nombre: "Cliente4", logo:""},
        {nombre: "Cliente5", logo:""},
]
    return(
        <div className="clients__container">
            <h3 className="clients__title">Algunos de nuestros clientes</h3>
            <div className="container" style={{justifyContent: 'space-between'}}>
            {clientes.map(cliente => <div className="client">{cliente.nombre}</div>)}
            </div>
        </div>
    )
}

export default Clients;