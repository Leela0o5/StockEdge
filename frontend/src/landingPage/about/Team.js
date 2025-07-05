/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Team() {
  return (
    <div className="container py-5">
      {/* Section Title */}
      <div className="row border-top py-5">
        <div className="col text-center">
          <h2 className="fw-bold">People</h2>
        </div>
      </div>

      {/* Team Member Row */}
      <div
        className="row align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        {/* Image */}
        <div className="col-md-6 text-center px-4 py-3">
          <img
            src="/media/images/profile.png"
            alt="Ronaldo profile"
            style={{ borderRadius: "50%", width: "70%", maxWidth: "240px" }}
            className="img-fluid"
          />
          <h4 className="mt-4 mb-1">Ronaldo</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>

        {/* Bio */}
        <div className="col-md-6 text-muted px-4 py-3">
          <p>
            Cristiano Ronaldo has made numerous investments in companies like
            Bioniq, Novus (Electric Motorbike), and UFL within the Consumer
            Non-Durables, Automotive, and Entertainment Software industries.
          </p>
          <p>
            As an angel investor, Cristiano invests personal money into
            promising companies, typically in exchange for equity.
          </p>
          <p>
            His latest investment was on 18-Mar-2025 in Bioniq, a company within
            the Consumer Non-Durables industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
