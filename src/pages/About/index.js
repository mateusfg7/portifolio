import React, { useEffect } from "react";

import axios from "axios";

import Menu from "../../components/Menu";

import "./styles.css";

export default function About() {
  useEffect(() => {
    const aboutButton = document.getElementById("about-button");
    aboutButton.classList.add("selected");
  });

  return (
    <div>
      <Menu />
      <h2 id="about">About</h2>
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit fringilla nisi sed tempor. In lacinia auctor iaculis. Sed
          vel porta metus. In ut leo nunc. Vivamus et sollicitudin sem, at
          tristique quam. Proin vitae ante nec tellus mattis dictum sit amet vel
          erat. In hac habitasse platea dictumst. Pellentesque dictum mauris
          eget luctus vehicula. Vivamus tincidunt nunc rhoncus, fringilla nisi
          vitae, finibus nibh. Mauris non libero ut felis rutrum dapibus. Fusce
          egestas aliquet leo, sit amet laoreet tortor euismod sed.
        </p>
        <p>
          Sed a felis id diam elementum ultricies. Suspendisse est turpis,
          placerat non accumsan convallis, imperdiet eget felis. Suspendisse
          cursus augue magna, vitae finibus eros pretium ac. Sed justo enim,
          vulputate ut egestas nec, aliquet sit amet felis. Mauris lacus diam,
          fermentum vel eros quis, laoreet suscipit purus. Sed pharetra ultrices
          massa. Sed id porta sapien. Aenean blandit rhoncus rhoncus.
        </p>
        <p>
          Aliquam velit leo, imperdiet at magna eu, pretium vulputate odio.
          Phasellus mi purus, ultricies in dictum non, elementum eu tortor.
          Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Sed vitae eros rhoncus
          quam iaculis volutpat ut vitae lorem. Pellentesque non rutrum augue.
          Vestibulum volutpat sapien a sem fermentum pellentesque. Sed sodales
          vitae.
        </p>
      </div>
    </div>
  );
}
