import "./App.css";
import {Tooltip, TooltipProvider } from "react-tooltip";
import CharactersList from "./components/сharactersList";

function App() {
  return (
    <div className="App">
      <h1>Game of Thrones</h1>
      <TooltipProvider>
        <CharactersList/>
        <Tooltip/>
      </TooltipProvider>
    </div>
  );
}

export default App;
