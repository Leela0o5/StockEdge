/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left text section */}
        <div className="col-12 col-md-6">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4">{productDescription}</p>

          <div className="mb-4">
            <a href={tryDemo} className="me-2">
              Try Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} className="">
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="d-flex gap-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>
        {/* Right image section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img src={imageURL} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
