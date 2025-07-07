/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row border-bottom text-center mt-5">
        <div className="col">
          <h1>Pricing</h1>
          <p className="text-muted mb-5 mt-3">
            Free equity investments and flat ₹20 intraday and F&O trades
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row mt-5 text-center">
        <div className="col-12 col-md-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            className="mb-3 img-fluid"
            alt="Equity"
            style={{ maxHeight: "100px" }}
          />
          <h4>Free equity delivery</h4>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img
            src="media/images/intradayTrades.svg"
            className="mb-3 img-fluid"
            alt="Intraday"
            style={{ maxHeight: "100px" }}
          />
          <h4>Intraday and F&O trades</h4>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity. Flat ₹20 on
            all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img
            src="media/images/pricing0.svg"
            className="mb-3 img-fluid"
            alt="Mutual Funds"
            style={{ maxHeight: "100px" }}
          />
          <h4>Free direct MF</h4>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center my-5">
        <h2>Open a StockEdge Account</h2>
        <p className="lead fs-5 text-muted px-2">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary fs-5 mt-3 px-4 py-2"
          style={{ maxWidth: "200px", width: "100%" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
