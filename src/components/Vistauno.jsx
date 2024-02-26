import React from "react";
import "./Vistauno.css";

function vistaUno() {
  return (
    <div className="container-formulario">
      <h1>Register</h1>
      <form className="formulario">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
          required
        />
        <br />
      </form>{" "}
      <button className="boton" type="submit" value="Continue">
        Continue
      </button>
    </div>
  );
}

export default vistaUno;
