import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {MdEmail, MdPhone} from "react-icons/md"

const Footer = () => {
  return (
    <footer>
      <div className="main_footer">
        <div className="about">
          <h2>Nosotros.</h2>
          <p>
            Somos una compañía de innovación tecnológica, que se esfuerza por
            ofrecer a nuestros clientes productos y servicios de la más alta
            calidad. Estamos comprometidos con la construcción de una relación
            de trabajo duradera con nuestros clientes, basada en la confianza y
            el apoyo mutuo.{" "}
          </p>
          <button className="btn primary"><Link to='/contact'>¡Trabajemos juntos!</Link></button>
        </div>
        <div className="footer_contact">
          <h2>Contactanos.</h2>
          <div className="footer_contact_data">
          <div><MdPhone/>555-555-555</div>
          <div><MdEmail />info@nombre.com</div>
          <div><FaWhatsapp />+541155555555</div>
          </div>
        <div className="social_media">
          <div className="icons">
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaLinkedin />
            </Link>
          </div>
        </div>
        </div>
        
      </div>
      <div className="copyright">Copyright © {new Date().getFullYear()}, Argytec.</div>
    </footer>
  );
};

export default Footer;
