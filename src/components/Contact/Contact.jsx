import React from "react";

const ContactForm = () => {
    const fields = [
        {label: 'Nombre', name: 'name'},
        {label: 'E-Mail', name: 'email'},
        {label: 'Teléfono', name: 'phone'},
        {label:'¿Cómo podemos ayudarte?', name: 'subject'}
    ]
    return (
        <div className="contact__container">
            <form className="main__form">
            <h2 className="hero__title">Contactanos</h2>
            {fields.map((field, index) => <input key={index} type="text" name={field.name} placeholder={field.label} className="form-control"/>)}
            <button className="btn primary">Enviar</button>
        </form>
        </div>
    )
}

export default ContactForm;