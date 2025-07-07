/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Brokerage() {
  return (
    <div className="container my-5 mt-5">
      <div className="row text-center gy-4">
        {/* Brokerage Calculator */}
        <div className="col-12 col-md-6 p-4">
          <a href="#" className="text-decoration-none">
            <h3 className="mb-3 mt-3">Brokerage Calculator</h3>
          </a>
          <ul
            className="text-muted text-start mx-auto"
            style={{ maxWidth: "500px" }}
          >
            <li className="mb-3">₹100 per order for futures and options.</li>
            <li className="mb-3">
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-3">
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-3">
              ₹500 + GST as yearly account maintenance charges (AMC).
            </li>
          </ul>
        </div>

        {/* List of Charges */}
        <div className="col-12 col-md-6 p-4">
          <a href="#" className="text-decoration-none">
            <h3 className="mb-3 mt-3">List of Charges</h3>
          </a>
          <ul
            className="text-muted text-start mx-auto"
            style={{ maxWidth: "500px" }}
          >
            <li className="mb-3">
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li className="mb-3">
              Options - ₹50 per crore + GST on premium traded value.
            </li>
            <li className="mb-3">
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
