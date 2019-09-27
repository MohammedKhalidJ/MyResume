import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";

import ScrollspyNav from "react-scrollspy-nav";
import Typist from "react-typist";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import backgroundImage from "./Images/index-bng.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ height: `${window.innerHeight}px` }}>
        <img
          src={backgroundImage}
          className="img-fluid"
          alt="Error while loading"
          width="100%"
          style={{ height: `${window.innerHeight}px` }}
        />
        <div className="typist-text">
          <Typist>
            "I can not do everything, but I can do something. <br />I must not
            fail to do the something that I can do."
          </Typist>
        </div>
        <ScrollspyNav
          scrollTargetIds={["section_1"]}
          activeNavClass="is-active"
        >
          <a href="#section_1" className="first-section">
            <span>
              {" "}
              <i
                className="fas fa-arrow-down"
                style={{ fontSize: "2em", color: "black" }}
              />
            </span>
          </a>
        </ScrollspyNav>
      </div>
      <div id="section_1" style={{ height: `${window.innerHeight}px` }}>
        <span>section_1</span>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
