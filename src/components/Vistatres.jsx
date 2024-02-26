import React from "react";
import "./Vistatres.css";

function Vistatres() {
  return (
    <div className="container-formulario">
      <h1 className="h1-resumen">Summary</h1>
      <div className="campo-intereses">
        <label className="label-texto" htmlFor="nombre">
          Name:
        </label>
        <p id="resultado-nombre"></p>
      </div>
      <div className="campo-intereses">
        <label className="label-texto" htmlFor="email">
          Email:
        </label>
        <p id="resultado-email"></p>
      </div>
      <div className="topics">
        <label className="label-texto" htmlFor="temas">
          Topics:
        </label>
        <ul id="temas" className="temas">
          <li>User experience</li>
          <li>Graphic Design</li>
        </ul>
      </div>
      <button className="boton" type="submit" value="Continue">
        Confirm
      </button>
    </div>
  );
}

export default Vistatres;
