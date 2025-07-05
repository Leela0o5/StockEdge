/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Education() {
  return (
    <div className="container mt-5 p-3">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            className="img-fluid"
            alt="Education"
            style={{ maxWidth: "70%", height: "auto" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 px-4">
          <h2 className="fs-2 mb-4">Free and open market education</h2>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the
            world, covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            className="d-inline-block mb-4 text-decoration-none fw-medium"
          >
            Varsity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="text-muted mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a href="#" className="d-inline-block text-decoration-none fw-medium">
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
