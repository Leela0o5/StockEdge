/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-md-5 mb-4 mb-md-0">
          <h2 className=" mb-3">Unbeatable pricing</h2>
          <p className="text-muted">
            We pioneered the concept of discount transparency in India. Flat
            fees and no hidden charges.
          </p>
          <a href="#" className="fw-medium text-decoration-none">
            See pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Price Cards */}
        <div className="col-md-7">
          <div className="row text-center">
            <div className="col-6">
              <div className="border rounded p-4 h-100">
                <h2 className="fw-bold mb-2">₹0</h2>
                <p className="mb-0">
                  Free equity delivery <br />
                  and direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="border rounded p-4 h-100">
                <h2 className="fw-bold mb-2">₹20</h2>
                <p className="mb-0">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
