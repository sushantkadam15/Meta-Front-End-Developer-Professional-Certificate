
import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  const [darkmode, setDarkMode] = useState(false);

  const darkModeToggle = () => setDarkMode((previousStatus) => !previousStatus);
  return (
    <div className="h-screen" data-theme={darkmode ? "dark" : "cupcake"}>
      {/* Dark Mode Toggle Option */}
      <div className=" flex justify-between items-center mx-5">
        <h1 className="text-xl">Calculator App</h1>
        <div className="form-control">
          <label className="label cursor-pointer justify-end">
            <span className="label-text mx-2">Dark Mode</span>
            <input
              type="checkbox"
              className="toggle"
              onChange={darkModeToggle}
            />
          </label>
        </div>
      </div>

      <div class="divider"></div>

      {/* App starts here */}
      <Calculator />
    </div>
  );
}

export default App;
