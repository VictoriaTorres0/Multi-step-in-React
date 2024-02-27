import React from "react";
import "./Vistatres.css";

function Vistatres({ name, email, opcion }) {
  return (
    <div className="container-formulario">
      <h1 className="h1-resumen">Summary</h1>
      <div className="campo-intereses">
        <label className="label-texto" htmlFor="nombre">
          Name:
        </label>
        <p id="resultado-nombre">{name}</p>
      </div>
      <div className="campo-intereses">
        <label className="label-texto" htmlFor="email">
          Email:
        </label>
        <p id="resultado-email">{email}</p>
      </div>
      <div className="topics">
        <label className="label-texto" htmlFor="temas">
          Topics:
        </label>
        <ul id="temas" className="temas">
          <li>{opcion}</li>
        </ul>
      </div>
    </div>
  );
}

export default Vistatres;
