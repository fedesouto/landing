import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceList = [
    {
      image: "assets/web-development.svg",
      title: "Diseño y Desarrollo Web",
      description:
        "Ya sea que necesite un sencillo sitio web de folleto o una plataforma de comercio electrónico compleja, tenemos las habilidades y la experiencia para ofrecer la solución perfecta.",
    },
    {
      image: "assets/seo-svgrepo-com.svg",
      title: "Optimización de Motores de Búsqueda",
      description:
        "Analizaremos su sitio web y haremos recomendaciones para optimizaciones que le ayudarán a lograr una mayor visibilidad y más tráfico orgánico.",
    },
    {
      image: "assets/ecommerce.svg",
      title: "Desarrollo e-commerce",
      description: "Ofrecemos servicios de diseño web, programación, integración con soluciones de pago, configuración de servidores y todo lo necesario para lanzar tu tienda online."
    },
    {
      image: "assets/social-media.svg",
      title: "Integración con Redes Sociales",
      description: "Conectamos tu sitio web con tus redes sociales para aumentar el tráfico y la visibilidad de tu sitio."
    },
    {
      image: "assets/edit-svgrepo-com.svg",
      title: "Modificación de Sitios Existentes",
      description: "Hacemos que tu web sea fácil de usar, atractivo y que cumpla con los estándares modernos de diseño web."
    },
    {
      image: "assets/edit-svgrepo-com.svg",
      title: "Algun otro servicio",
      description: "Hacemos que tu web sea fácil de usar, atractivo y que cumpla con los estándares modernos de diseño web."
    },
  ];
  return (
    <section id="services">
      <h2 className="hero__title">Nuestros Servicios</h2>
      <p className="hero__text">
        Ofrecemos una amplia gama de servicios de desarrollo web para ayudar a
        las empresas de todos los tamaños a alcanzar sus objetivos en línea.
      </p>
      <div className="services-container">
        {serviceList.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
