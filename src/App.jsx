import "./App.css";
import React, { useState } from "react";
import Vistauno from "../src/components/Vistauno.jsx";
import Vistados from "../src/components/Vistados.jsx";
import Vistatres from "../src/components/Vistatres.jsx";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentView, setCurrentView] = useState(1);
  const [opcion, setOpcion] = useState("");
  const nextView = () => {
    if (currentView === 3) return;
    setCurrentView(currentView + 1);
  };

  return (
    <div className="App">
      <div className="container-form">
        <div className="form-base">
          {currentView === 1 && (
            <Vistauno
              setName={setName}
              name={name}
              setEmail={setEmail}
              email={email}
            />
          )}
          {currentView === 2 && (
            <Vistados opcion={opcion} setOpcion={setOpcion} />
          )}
          {currentView === 3 && (
            <Vistatres opcion={opcion} name={name} email={email} />
          )}
          <button className="boton" onClick={nextView}>
            Continue
          </button>
        </div>
        <div className="container--advance-button">
          <button
            className={`advance-button ${
              currentView === 1 ? "purple-ball" : ""
            }`}
          ></button>
          <button
            className={`advance-button ${
              currentView === 2 ? "purple-ball" : ""
            }`}
          ></button>
          <button
            className={`advance-button ${
              currentView === 3 ? "purple-ball" : ""
            }`}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App;
