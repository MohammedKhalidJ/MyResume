import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";

import InitialComponent from "./components/InitialComponent";
import EducationView from "./components/EducationView";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <InitialComponent />
      <div id="section_1" style={{ height: `${window.innerHeight}px` }}>
        <EducationView />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
