import "./assets/App.css";
import { useEffect, useState } from "react";
const { dialog, globalShortcut } = window.require("electron").remote;

function App() {
  const [state, setstate] = useState("none");
  const test = () => {
    dialog.showMessageBoxSync({ type: "info", message: "Hello from Yaal !" });
  };

  useEffect(() => {
    
  })

  const keypress = (e) => {
    setstate(e.key);
  };

  return (
    <div className="App" onKeyPress={keypress}>
      <h1>Yaal</h1>
      <button onClick={test}>Dialog test</button>

      <div style={state === "q" ? { backgroundColor: "#222" } : {}}>
        Entry 1
      </div>
      <div style={state === "d" ? { backgroundColor: "#333" } : {}}>
        Entry 2
      </div>
      <br/>
      <br/>
      <br/>
      key pressed: {state}
    </div>
  );
}

export default App;
