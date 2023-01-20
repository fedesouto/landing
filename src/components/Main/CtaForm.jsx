import React from "react";

const CtaForm = () => {
    const fields = [
        {label: 'Nombre', name: 'name'},
        {label: 'E-Mail', name: 'email'},
        {label: 'Teléfono', name: 'phone'},
    ]
    return (
        <form className="main__form">
            <h2>Lorem ipsum dolor sit amet.</h2>
            {fields.map((field, index) => <input key={index} type="text" name={field.name} placeholder={field.label} className="form-control"/>)}
            <button className="btn primary">¡Solicitá tu presupuesto ahora!</button>
        </form>
    )
}

export default CtaForm;