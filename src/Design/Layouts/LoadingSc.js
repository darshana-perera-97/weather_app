import React from "react";
import logo from "./logos.png";

export default function LoadingSc() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "Josefin Sans",
              textShadow: "2px 2px 5px blue",
            }}
          >
            Weather Application
          </p>
        </header>
      </div>
    </div>
  );
}
