import React from "react";
import FaqCard from "./FaqCard";

const questionList = [
  {
    question: "¿Qué medios de pago aceptan en Argytec?",
    answer:
      "Podrás abonar con tarjeta de debito, crédito y efectivo a través de MercadoPago. Además, aceptamos transferencias bancarias.",
  },
  {
    question: "¿Pueden modificar mi sitio web?",
    answer:
      "Si! Modificamos tu sitio web existente para que se vea y funcione de forma profesional y moderna.",
  },
  {
    question: "¿Cómo es el proceso para tener mi sitio web?",
    answer:
      "El proceso que seguimos en Argytec comienza con una reunión para entender las necesidades de cada cliente. Luego se realiza un presupuesto acorde a las tareas a realizar. Una vez aceptado el mismo, comenzamos a desarrollar tu sitio web.",
  },
  {
    question: "No tengo en claro que tipo de sitio web necesito, ¿Pueden asesorarme?",
    answer:
      "Sí! Nuestro equipo de expertos te van a asesorar para descubrir que tipo de solución necesitas para exprimir tu espacio en internet de la mejor manera. No olvides que realizamos productos a medida!",
  },
  {
    question: "Necesito otro tipo de solución, ¿Pueden ayudarme a relizarla?",
    answer:
      "En Argytec no solo realizamos sitios web, sino que brindamos todo tipo de soluciones. Nuestro equipo tiene amplios conocimientos en desarrollo de servidores, bases de datos, machine learning, entre otros. ¡Contactanos para realizar tus proyectos!",
  },
];

const Faq = () => {
  return (
    <main className="container" id="faq">
      <h2 className="hero__title">Preguntas Frecuentes</h2>
      <p className="hero__text">
        ¿Tenés dudas? Te invitamos a leer las preguntas frecuentes sobre
        nuestros servicios.
      </p>
      <section className="faq__list">
        {questionList.map(({ question, answer }, index) => {
          return <FaqCard question={question} answer={answer} key={index} />;
        })}
      </section>
    </main>
  );
};

export default Faq;
