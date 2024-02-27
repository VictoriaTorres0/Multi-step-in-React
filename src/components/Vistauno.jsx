import "./Vistauno.css";
import React, { useState } from "react";

function Vistauno({ name, setName, email, setEmail }) {
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
      </form>
    </div>
  );
}

export default Vistauno;
