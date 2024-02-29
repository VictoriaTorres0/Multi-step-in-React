import React from "react";
import "./Vistados.css";

function Vistados({ opcion, setOpcion,  }) {
  console.log(opcion);

  return (
    <div className="container-formulario">
      <h1>Which topics you are interested in?</h1>
      <form className="formulario">
        <button
          type="button"
          className={`formulario-btn ${
            opcion === "Software Development" ? "button-selected" : ""
          }`}
          onClick={() => setOpcion("Software Development")}
        >
          Software Development
        </button>
        <br />
        <button
          type="button"
          className={`formulario-btn ${
            opcion === "User Experience" ? "button-selected" : ""
          }`}
          onClick={() => setOpcion("User Experience")}
        >
          User Experience
        </button>
        <br />
        <button
          type="button"
          className={`formulario-btn ${
            opcion === "Graphic Design" ? "button-selected" : ""
          }`}
          onClick={() => setOpcion("Graphic Design")}
        >
          Graphic Design
        </button>
        <br />
      </form>
    </div>
  );
}

export default Vistados;
