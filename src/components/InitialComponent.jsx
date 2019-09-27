import React from "react";
import ScrollspyNav from "react-scrollspy-nav";
import Typist from "react-typist";

import backgroundImage from "../Images/index-bng.jpg";

const InitialComponent = () => (
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
        "I can not do everything, but I can do something. <br />I must not fail
        to do the something that I can do."
      </Typist>
    </div>
    <ScrollspyNav scrollTargetIds={["section_1"]} activeNavClass="is-active">
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
);

export default InitialComponent;
