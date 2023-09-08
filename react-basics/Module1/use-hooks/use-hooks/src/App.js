import { useState } from "react";

function App() {
  const [inputText, setText] = useState("hello");

  const handleChange = (event) => setText(event.target.value);

  return (
    <div>
      <input value={inputText} onChange={handleChange}></input>
      <p>You typed {inputText}</p>
      <button onClick={() =>setText("hello")}>Rest</button>
    </div>
  );
}

export default App;
