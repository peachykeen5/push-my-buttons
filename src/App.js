import "./App.scss";
import { Button } from "./components";

function App() {
  const handlePrimarySolidClick = () => {
    alert("Solid primary button");
  };
  const handleSecondarySolidClick = () => {
    alert("Solid secondary button");
  };
  const handleTertiarySolidClick = () => {
    alert("Solid tertiary button");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Go ahead, push my buttons.</h2>
        <row className="row">
          <p>This is a row</p>
        </row>
      </header>
      <main className="main">
        <row className="row">
          <Button
            importance="primary"
            label="primary button"
            handleClick={handlePrimarySolidClick}
          />
          <Button
            importance="secondary"
            label="secondary button"
            handleClick={handleSecondarySolidClick}
          />
          <Button
            importance="tertiary"
            label="tertiary button"
            handleClick={handleTertiarySolidClick}
          />
        </row>
        <row className="row">
          <Button
            importance="primary__outline"
            label="primary button"
            handleClick={handlePrimarySolidClick}
          />
          <Button
            importance="secondary__outline"
            label="secondary button"
            handleClick={handleSecondarySolidClick}
          />
          <Button
            importance="tertiary__outline"
            label="tertiary button"
            handleClick={handleTertiarySolidClick}
          />
        </row>
        <row className="row">
          <Button
            importance="primary__text"
            label="primary button"
            handleClick={handlePrimarySolidClick}
          />
          <Button
            importance="secondary__text"
            label="secondary button"
            handleClick={handleSecondarySolidClick}
          />
          <Button
            importance="tertiary__text"
            label="tertiary button"
            handleClick={handleTertiarySolidClick}
          />
        </row>
      </main>
    </div>
  );
}

export default App;
