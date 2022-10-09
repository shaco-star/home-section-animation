import { useEffect, useState } from "react";
import "./App.css";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  const [state, setState] = useState({ x: "", y: "" });
  

  function mouseMove(e) {
    setState((state) => ({
      ...state,
      x:  e.clientX,
      y:  e.clientY,
    }));
  }

  return (
    <div className="App" onMouseMove={mouseMove}>
      <section className="showcase overflow-hidden">
        <Navbar />
        <h1 className="title line line-horizontal overflow-hidden">
          <span className="to-right has-in-common" style={{ "--delay": "0s" }}>
            Top tier
          </span>
        </h1>
        <h2 className="subtitle overflow-hidden">
          <span
            className="to-right has-in-common"
            style={{ "--delay": "0.15s" }}
          >
            Automation
          </span>
        </h2>
        <div className="vertical-text line line-vertical">
          <div className="vertical-text-inner overflow-hidden">
            <span
              className="to-bottom has-in-common"
              style={{ "--delay": "0.25s" }}
            >
              THe future is now
            </span>
          </div>
        </div>
        <Description />
        <a
          href="/"
          className="cta link scale-rotate has-in-common"
          style={{ delay: "0.75s" }}
        >
          Take <br /> Control
        </a>
        <Footer mouseMove={state} />
      </section>
    </div>
  );
}

export default App;
