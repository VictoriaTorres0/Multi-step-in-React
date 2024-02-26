import React from "react";
import "./Vistados.css";

function Vistados() {
  return (
    <div className="container-formulario">
      <h1>Which topics you are interested in?</h1>
      <form className="formulario">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Software Development"
          required
        />
        <br />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="User Experience"
          required
        />
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Graphic Design"
          required
        />
        <br />
      </form>
      <button className="boton" type="submit" value="Continue">
        Continue
      </button>
    </div>
  );
}

export default Vistados;
