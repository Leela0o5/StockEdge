function Universe() {
  return (
    <div className="container text-center my-5">
      <h2 className="fw-semibold">The Zerodha Universe</h2>
      <p className="text-muted mb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center">
        <div>
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid mb-2"
            style={{ maxHeight: "60px" }}
          />
          <p className="text-muted small">Thematic investment platform</p>
        </div>

        <div>
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid mb-2"
            style={{ maxHeight: "60px" }}
          />
          <p className="text-muted small">Algo & strategy platform</p>
        </div>

        <div>
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid mb-2"
            style={{ maxHeight: "60px" }}
          />
          <p className="text-muted small">Options trading platform</p>
        </div>

        <div>
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            className="img-fluid mb-2"
            style={{ maxHeight: "60px" }}
          />
          <p className="text-muted small">Asset management</p>
        </div>

        <div>
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid mb-2"
            style={{ maxHeight: "60px" }}
          />
          <p className="text-muted small">Bonds trading platform</p>
        </div>

        <div>
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid mb-2"
            style={{ maxHeight: "60px" }}
          />
          <p className="text-muted small">
            Personalized advice on life and health insurance.
          </p>
        </div>
      </div>

      <button className="btn btn-primary mt-5">Sign up now</button>
    </div>
  );
}

export default Universe;
