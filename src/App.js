import "./App.scss";
import { Button } from "./components";

const ImportanceEnums = {
  PrimaryOutline: "PrimaryOutline",
  PrimarySolid: "PrimarySolid",
  PrimaryText: "PrimaryText",
  SecondaryOutline: "SecondaryOutline",
  SecondarySolid: "SecondarySolid",
  SecondaryText: "SecondaryText",
  TertiaryOutline: "TertiaryOutline",
  TertiarySolid: "TertiarySolid",
  TertiaryText: "TertiaryText",
  Invisible: "Invisible",
};

function App() {
  const handleClick = (importance) => {
    switch (importance) {
      case ImportanceEnums.PrimarySolid:
        return alert("primary solid");

      case ImportanceEnums.PrimaryOutline:
        return alert("primary outline");

      case ImportanceEnums.PrimaryText:
        return alert("primary text");

      case ImportanceEnums.SecondarySolid:
        return alert("Secondary solid");

      case ImportanceEnums.SecondaryOutline:
        return alert("secondary outline");

      case ImportanceEnums.SecondaryText:
        return alert("secondary text");

      case ImportanceEnums.TertiarySolid:
        return alert("Tertiary solid");

      case ImportanceEnums.TertiaryOutline:
        return alert("Tertiary outline");

      case ImportanceEnums.TertiaryText:
        return alert("Tertiary text");
      
      case ImportanceEnums.Invisible:
        return alert("YOU FOUND THE INVISIBLE BUTTON");

      default:
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Go ahead, push my buttons.</h2>
      </header>
      <main className="main">
        <row className="row">
          <Button
            importance="primary"
            label="solid 1"
            handleClick={() => handleClick(ImportanceEnums.PrimarySolid)}
          />
          <Button
            importance="secondary"
            label="solid 2"
            handleClick={() => handleClick(ImportanceEnums.SecondarySolid)}
          />
          <Button
            importance="tertiary"
            label="solid 3"
            handleClick={() => handleClick(ImportanceEnums.TertiarySolid)}
          />
        </row>
        <row className="row">
          <Button
            importance="primary__outline"
            label="outline 1"
            handleClick={() => handleClick(ImportanceEnums.PrimaryOutline)}
          />
          <Button
            importance="secondary__outline"
            label="outline 2"
            handleClick={() => handleClick(ImportanceEnums.SecondaryOutline)}
          />
          <Button
            importance="tertiary__outline"
            label="outline 3"
            handleClick={() => handleClick(ImportanceEnums.TertiaryOutline)}
          />
        </row>
        <row className="row">
          <Button
            importance="primary__text"
            label="primary text"
            handleClick={() => handleClick(ImportanceEnums.PrimaryText)}
          />
          <Button
            importance="secondary__text"
            label="secondary text"
            handleClick={() => handleClick(ImportanceEnums.SecondaryText)}
          />
          <Button
            importance="tertiary__text"
            label="tertiary text"
            handleClick={() => handleClick(ImportanceEnums.TertiaryText)}
          />
        </row>
        <row className="row">
          <Button
            importance="invisible"
            label="invisible button"
            handleClick={() => handleClick(ImportanceEnums.Invisible)}
          />
        </row>
      </main>
    </div>
  );
}

export default App;
