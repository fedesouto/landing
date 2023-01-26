import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <footer>
            <div className="main_footer">
                <div className="about">
                    <h2>Nosotros.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, tempore itaque optio voluptatum ipsum illum, in corporis ratione hic quam error animi ipsam consectetur reiciendis.</p>
                </div>
                <div className="social_media">
                    <h2>Seguinos en nuestras redes.</h2>
                    <div className="icons">
                    <Link><FaInstagram /></Link>
                    <Link><FaFacebook /></Link>
                    <Link><FaTwitter /></Link>
                    <Link><FaLinkedin /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;