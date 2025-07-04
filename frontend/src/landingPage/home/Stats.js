/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Stats() {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h1 className="mb-5">Trust with Confidence</h1>

          <div className="mb-4">
            <h2 className="fs-5 fw-semibold">Customer-first always</h2>
            <p className="text-muted mb-0">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
              crores worth of equity investments.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 fw-semibold">No Spam or gimmicks</h2>
            <p className="text-muted mb-0">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps you can use your way.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 fw-semibold">The StockEdge Universe</h2>
            <p className="text-muted mb-0">
              Not just an app, but an entire ecosystem. Our investment in 30+
              fintech startups delivers tailored services for your needs.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 fw-semibold">Do better with money</h2>
            <p className="text-muted mb-0">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions—we help you make smarter money decisions.
            </p>
          </div>
        </div>

        {/* Image and Links Section */}
        <div className="col-md-6 text-center p-3">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem Illustration"
            className="img-fluid mb-1"
            style={{ maxWidth: "75%" }}
          />

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 p-5">
            <a href="#" className="text-decoration-none fw-medium">
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-decoration-none fw-medium">
              Try Kite demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
