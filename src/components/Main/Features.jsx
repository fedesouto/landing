import React from "react";
import {
  FcMultipleDevices,
  FcRating,
  FcStatistics,
  FcSupport,
} from "react-icons/fc";

const Features = () => {
  const elements = [
    {
      icon: <FcMultipleDevices />,
      title: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur voluptatem quaerat iste cupiditate in.",
    },
    {
      icon: <FcRating />,
      title: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur voluptatem quaerat iste cupiditate in.",
    },
    {
      icon: <FcStatistics />,
      title: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur voluptatem quaerat iste cupiditate in.",
    },
    {
      icon: <FcSupport />,
      title: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur voluptatem quaerat iste cupiditate in.",
    },
  ];
  return (
    <div id="features">
      <h2 className="features__title">
        Construimos sitios web que impulsan resultados.
      </h2>
      <p className="features__copy">
        Utilizamos herramientas y tecnologías de vanguardia para crear sitios
        web seguros, escalables y de gran rendimiento. <br />
        Nos enfocamos en desarrollar sitios web que atraigan y conviertan a los
        clientes, a la vez que mejoran la usabilidad y la experiencia del
        usuario.
      </p>
      <div className="features__wrapper container">
        {elements.map(({ icon, title, description }, index) => {
          return (
            <div key={index} className="feature">
              {icon}
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
