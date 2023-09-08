import logo from "./logo.svg";
import "./App.css";
import MousePanel from "./component/MousePanel";
import MouseLogger from "./component/MouseLogger";

function App() {
  return (
    <div className="App">
      <MousePanel />
      <MouseLogger />
    </div>
  );
}

export default App;
