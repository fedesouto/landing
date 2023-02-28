import React from "react";

const ServiceCard = ({service: {image, title, description}}) => {
    return(
        <article className="service">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="btn primary">Conocé más</button>
        </article>
    )
}

export default ServiceCard;