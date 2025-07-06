/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row justify-content-center text-center mt-5 p-3">
        <div className="col-12 col-md-10 col-lg-8 mb-5">
          <h1 className="display-4 fw-bold fs-1">Technology</h1>
          <h3 className="text-muted mt-3">
            Sleek, modern and intuitive trading platforms
          </h3>
          <p className="mt-4 fs-5">
            Check out our{" "}
            <a href="#" className="text-decoration-none">
              investment offerings{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
