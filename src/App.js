import React from "react";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header.js";

function App() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  return (
    <div className="App">
      <Header date={date} setDate={setDate} />
    </div>
  );
}

export default App;
