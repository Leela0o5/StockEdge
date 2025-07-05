/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0 ">
          <img
            src="media/images/largestBroker.svg"
            className="img-fluid"
            alt="Award Illustration"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>

        <div className="col-md-6 text-center text-md-start mt-sm-3 p-5">
          <h1 className="p-2 fs-2">Largest Stock broker in India</h1>
          <p className="mb-5">
            2+ million StockEdge clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Gold</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5">
            <img
              src="media/images/pressLogos.png"
              className="img-fluid"
              alt="Press Mentions"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
