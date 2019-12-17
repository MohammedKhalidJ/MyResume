import React from "react";

const educationData = [
  {
    id: "secondary",
    degree: "Secondary",
    institution: "Kellett Higher Secondary School",
    duration: 1,
    passedoutyear: 2008,
    percentage: 73
  },
  {
    id: "highersecondary",
    degree: "Higher Secondary",
    institution: "Madras Christian College Higher Secondary School",
    duration: 1,
    passedoutyear: 2010,
    percentage: 71
  },
  {
    id: "university",
    degree: "University",
    institution: "Dhaanish Ahmed College Of Engineering",
    duration: 4,
    passedoutyear: 2014,
    percentage: 68
  }
];
// fetch("resumeDetails.json").then(function(data) {
//   console.log(data);
// });

const EducationView = () => (
  <div class="jumbotron">
    <div class="container" style={{ padding: "1%" }}>
      <div class="row">{educationData.map(data => cards(data))}</div>
    </div>
  </div>
);

const cards = data => (
  <React.Fragment>
    <div class="col-md-4">
      <div class="card" style={{ width: "400" }}>
        <div class="card-body">
          <h4 class="card-title">{data.degree}</h4>
          <p class="card-text">{data.passedoutyear}</p>
          <button
            class="btn btn-primary stretched-link"
            data-toggle="modal"
            data-target={`#${data.id}id`}
          >
            See Profile
          </button>
        </div>
      </div>
    </div>
    {educationDetails(data)}
  </React.Fragment>
);

const educationDetails = data => (
  <div
    class="modal fade"
    id={`${data.id}id`}
    tabindex="-1"
    role="dialog"
    aria-labelledby={`${data.id}Title`}
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id={`${data.id}Title`}>
            {data.degree}
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {data.degree} Name : {data.institution} Year : {data.passedoutyear}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default EducationView;
