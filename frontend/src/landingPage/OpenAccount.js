import React from "react";
function OpenAccount() {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h1 className="mt-4">Open a StockEdge Account</h1>

        <p className="lead fs-5 px-2 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <button
          className="btn btn-primary fs-5 mt-3 px-4 py-2mb-5"
          style={{ maxWidth: "200px", width: "100%" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
