import React from "react";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

import icon from "../../services/fontawesome";

import "./style.css";
import "./style-hover.css";

const Footer = () => (
  <footer className="container-fluid pt-3 footer bg-dark text-light text-center">
    <div className="info_box">
      <h1 id="contato">Contato</h1>
      <p>
        <a
          href="https://api.whatsapp.com/send?phone=+5537998440073"
          target="_blank"
          className="contact-phone"
        >
          <span className="contact">+55 (37) 99844-0073</span>
          <span className="icon wpp"> {icon(faWhatsappSquare)}</span>
        </a>
        <br />
        <a
          href="mailto://mateusfelipefg77@gmail.com"
          target="_blank"
          className="contact-email"
        >
          <span className="contact">mateusfelipefg77@gmail.com</span>
          <span className="icon email"> {icon(faEnvelopeSquare)}</span>
        </a>
      </p>
    </div>

    <div className="info_box">
      <h2>Redes Sociais</h2>
      <div className="container col-6 col-md-4 d-flex justify-content-around">
        <a
          href="https://www.facebook.com/mateusfelipefg7"
          target="_blank"
          className="face icon"
        >
          {icon(faFacebookF)}
        </a>
        •
        <a
          href="https://twitter.com/mateusfg77"
          target="_blank"
          className="tt icon"
        >
          {icon(faTwitter)}
        </a>
        •
        <a
          href="https://www.instagram.com/mateusfg7/"
          target="_blank"
          className="insta icon"
        >
          {icon(faInstagram)}
        </a>
        •
        <a
          href="https://www.linkedin.com/in/mateus-felipe-a90030152/"
          target="_blank"
          className="in icon"
        >
          {icon(faLinkedinIn)}
        </a>
      </div>
      <span className="copy bg-dark">&copy; Mateus Felipe Gonçalves</span>
    </div>
  </footer>
);

export default Footer;
