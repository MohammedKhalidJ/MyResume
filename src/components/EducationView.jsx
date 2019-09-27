import React from "react";

const EducationView = () => <div class="row">{cards()}</div>;

const cards = () => (
  <div class="col-md-4">
    <div class="card" style={{ width: "400" }}>
      <img
        class="card-img-top"
        src="img_avatar1.png"
        alt="Card"
        style={{ width: "100%" }}
      />
      <div class="card-body">
        <h4 class="card-title">John Doe</h4>
        <p class="card-text">
          Some example text some example text. John Doe is an architect and
          engineer
        </p>
        <button class="btn btn-primary stretched-link">See Profile</button>
      </div>
    </div>
  </div>
);

export default EducationView;
