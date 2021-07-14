import "./App.css";
const { dialog } = window.require("electron").remote;

function App() {
  const test = () => {
    dialog.showMessageBoxSync({ type: "info", message: "Hello from Yaal !" });
  };

  return (
    <div className="App">
      <h1>Yaal</h1>
      <button onClick={test}>Dialog test</button>
    </div>
  );
}

export default App;
