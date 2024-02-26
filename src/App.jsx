import "./App.css";
import Vistauno from "../src/components/Vistauno.jsx";
import Vistados from "../src/components/Vistados.jsx";
import Vistatres from "../src/components/Vistatres.jsx";

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
      <div className="container-form">
        <div className="form-base">
          <Vistatres />
        </div>
      </div>
    </div>
  );
}

export default App;
