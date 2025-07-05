/* eslint-disable jsx-a11y/anchor-is-valid */
//* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }} className="pt-5">
      <div className="container-fluid bg-light border-top pt-4">
        <div className="row text-start px-5">
          {/* Logo & Copyright */}
          <div className="col-md-3 mb-4">
            <img
              src="/media/images/logo2.png"
              alt="StockEdge logo"
              style={{ width: "120px" }}
              className="mb-3"
            />
            <p className="text-muted small">
              &copy; 2010 - 2024, Not StockEdge Broking Ltd. All rights
              reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Company</h5>
            {[
              "About",
              "Products",
              "Pricing",
              "Referral Programs",
              "Careers",
              "StockEdge.tech",
              "Press & media",
              "StockEdge cares (CSR)",
            ].map((item, index) => (
              <a key={index} href="#" className="d-block text-muted small mb-1">
                {item}
              </a>
            ))}
          </div>

          {/* Support Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Support</h5>
            {[
              "Contact",
              "Support Portal",
              "S-Connect blog",
              "List of charges",
              "Downloads & resources",
            ].map((item, index) => (
              <a key={index} href="#" className="d-block text-muted small mb-1">
                {item}
              </a>
            ))}
          </div>

          {/* Account Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Account</h5>
            {["Open an account", "Fund transfer", "60 day challenge"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="d-block text-muted small mb-1"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div
          className="px-5 mt-5 text-muted small"
          style={{ lineHeight: "1.7" }}
        >
          <p>
            StockEdge Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through StockEdge
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through StockEdge Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238. Registered Address: StockEdge
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India.
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details: Name, PAN, Address, Mobile Number, E-mail
            ID.
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile/email with your broker. KYC is one-time through a SEBI
            registered intermediary. IPO? Just fill your bank account number and
            sign — no cheque needed."
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
