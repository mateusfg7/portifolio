import React from "react";

import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedin,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

import icon from "../../services/fontawesome";

import "./style.css";
import "./style-hover.css";

const Footer = () => (
  <footer className="container-fluid pt-3 footer text-light text-center">
    <div className="info_box">
      <h1 id="contato">Contato</h1>
      <p>
        <a
          href="https://api.whatsapp.com/send?phone=+5537998440073"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-phone"
        >
          <span className="contact">+55 (37) 99844-0073</span>
        </a>
        <br />
        <a
          href="mailto://mateusfelipefg77@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-email"
        >
          <span className="contact">mateusfelipefg77@gmail.com</span>
        </a>
      </p>
    </div>

    <div className="info_box">
      <h2>Redes Sociais</h2>
      <div className="container col-6 col-md-4 d-flex justify-content-around social">
        <a
          href="https://www.facebook.com/mateusfelipefg7"
          target="_blank"
          rel="noopener noreferrer"
          className="face icon"
        >
          {icon(faFacebookSquare)}
        </a>
        •
        <a
          href="https://twitter.com/mateusfg77"
          target="_blank"
          rel="noopener noreferrer"
          className="tt icon"
        >
          {icon(faTwitterSquare)}
        </a>
        •
        <a
          href="https://www.instagram.com/mateusfg7/"
          target="_blank"
          rel="noopener noreferrer"
          className="insta icon"
        >
          {icon(faInstagramSquare)}
        </a>
        •
        <a
          href="https://www.linkedin.com/in/mateus-felipe-a90030152/"
          target="_blank"
          rel="noopener noreferrer"
          className="in icon"
        >
          {icon(faLinkedin)}
        </a>
      </div>
      <span className="copy">
        <a
          href="https://github.com/mateusfg7/portifolio/blob/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; Mateus Felipe Gonçalves
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
