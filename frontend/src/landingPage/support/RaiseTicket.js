/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-4 mt-5 mb-3 g-4">
        <div className="col-12 mb-4">
          <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        </div>

        {/* Block 1 - Account Opening */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h4>
            <i className="fa fa-user-plus me-2" aria-hidden="true"></i> Account
            Opening
          </h4>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Open Online
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Offline Forms
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            NRI & 3-in-1 Accounts
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Charges & Documents
          </a>
        </div>

        {/* Block 2 - Kite Trading Platform */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h4>
            <i className="fa fa-line-chart me-2" aria-hidden="true"></i> Kite
            (Trading)
          </h4>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Login Issues
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Charting Tools
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Order Types
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Market Timings
          </a>
        </div>

        {/* Block 3 - Console (Backoffice) */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h4>
            <i className="fa fa-database me-2" aria-hidden="true"></i> Console
            (Backoffice)
          </h4>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            P&L Reports
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Tax Statements
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Fund Transfer History
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Holdings Overview
          </a>
        </div>

        {/* Block 4 - Coin (Mutual Funds) */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h4>
            <i className="fa fa-pie-chart me-2" aria-hidden="true"></i> Coin
            (Mutual Funds)
          </h4>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Buy & Redeem
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            SIP Management
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Portfolio Tracking
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Tax Saving Funds
          </a>
        </div>

        {/* Block 5 - Funds & Transfers */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h4>
            <i className="fa fa-bank me-2" aria-hidden="true"></i> Funds &
            Transfers
          </h4>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Add/Withdraw Funds
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            UPI/IMPS/NEFT Issues
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Failed Transactions
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Bank Account Linking
          </a>
        </div>

        {/* Block 6 - Support & Account Services */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h4>
            <i className="fa fa-headphones me-2" aria-hidden="true"></i> Support
            & Services
          </h4>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Modify Details (Mobile/Email)
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Change Nominee
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Close Account
          </a>
          <a href="#" className="d-block mb-2" style={{ lineHeight: "1.8" }}>
            Raise General Query
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
