import "./App.css";
import Vistauno from "../src/components/Vistauno.jsx";
import Vistados from "../src/components/Vistados.jsx";

function App() {
  return (
    <div className="App">
      <div className="container-form">
        <div className="form-base">
          <Vistauno />
        </div>
      </div>
      <div className="container-form">
        <div className="form-base">
          <Vistados />
        </div>
      </div>
    </div>
  );
}

export default App;
