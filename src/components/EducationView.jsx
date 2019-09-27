import React from "react";

const EducationView = () => (
  <div class="container" style={{ padding: "5%" }}>
    <div class="row">
      {cards("Secondary", "2007 - 2008")}
      {cards("Higher Secondary", "2009 - 2010")}
      {cards("University", "2010 - 2014")}
    </div>
  </div>
);

const cards = (title, subtitle) => (
  <div class="col-md-4">
    <div class="card" style={{ width: "400" }}>
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p class="card-text">{subtitle}</p>
        <button class="btn btn-primary stretched-link">See Profile</button>
      </div>
    </div>
  </div>
);

export default EducationView;
