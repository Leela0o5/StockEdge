import React from "react";

function Hero() {
  return (
    <div className="container py-5">
      {/* Intro Heading */}
      <div className="row mb-5">
        <div className="col text-center">
          <h2 className="fs-3 fw-semibold">
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with technology.
          </h2>
        </div>
      </div>

      {/* Company Description */}
      <div
        className="row border-top pt-5"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        {/* Left Column */}
        <div className="col-md-6 text-muted mb-4 mb-md-0 px-3 px-md-5">
          <p>
            <strong>StockEdge</strong> is an Indian financial services company,
            primarily known as a discount brokerage, that offers a platform for
            trading stocks, derivatives, mutual funds, and other financial
            instruments. It was founded in 2010 with the goal of making trading
            and investment more accessible by reducing costs and leveraging
            technology.
          </p>
          <p>
            StockEdge is a member of major Indian stock exchanges and has grown
            to become one of the largest brokers in India by trading volume.
          </p>
          <p>
            It offers an electronic trading platform that facilitates
            institutional and retail trading of stocks, derivatives, currencies,
            commodities, mutual funds, and bonds. It's a member of NSE, BSE, and
            MCX.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-md-6 text-muted px-3 px-md-5">
          <p>
            In 2019, StockEdge became the largest retail stockbroker in India by
            active client base, overtaking ICICI Securities. It contributed up
            to 2% of daily retail volumes on Indian stock exchanges at the time.
          </p>
          <p>
            In June 2020, StockEdge became a "unicorn" with a self-assigned
            valuation of around $1 billion based on an ESOP buyback. It had
            about 1.3 million customers in early 2020, which rose to nearly 10
            million by the end of 2022.
          </p>
          <p>
            In 2020, StockEdge applied for a license to set up a mutual fund AMC
            in India and launched its fund house in 2023.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
