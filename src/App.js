import "./styles.css";
import Header from "../src/components/Header";
import Main from "./components/Main";
import { useState } from "react";
export default function App() {
  const [returnNotes, setReturnNotes] = useState({
    "2000": 0,
    "500": 0,
    "100": 0,
    "20": 0,
    "10": 0,
    "5": 0,
    "1": 0
  });
  return (
    <div className="App">
      <Header />
      <Main returnNotes={returnNotes} setReturnNotes={setReturnNotes} />
    </div>
  );
}
