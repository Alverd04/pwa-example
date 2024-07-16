// src/App.js

import React from "react";
import "./App.css";
import InstallBanner from "./InstallBanner";

function App() {
  return (
    <div className="App">
      <InstallBanner />
      <header className="App-header">
        <h1>My PWA</h1>
        {/* Your app content here */}
      </header>
    </div>
  );
}

export default App;
