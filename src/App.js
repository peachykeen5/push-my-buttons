import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Go ahead, push my buttons.</h2>
        <row className="row">
          <p>This is a row</p>
        </row>
      </header>
      <main className="main">
        <row>
          <button className="Button__primary">press me</button>
          <button className="Button__secondary">press me</button>
          <button className="Button__tertiary">press me</button>
        </row>
      </main>
    </div>
  );
}

export default App;
