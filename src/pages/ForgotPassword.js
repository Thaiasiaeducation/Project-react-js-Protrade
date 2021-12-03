import React from "react";

function ForgotPassword() {
  return (
    <section className="sptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
            <div className="single-page w-100 p-0">
              <div className="wrapper wrapper2">
                <form id="forgotpsd" className="card-body text-left">
                  <h4 className="font-weight-semibold2 pb-4">
                    Forgot Password
                  </h4>
                  <div className="mail">
                    <input type="email" name="mail" />
                    <label>Mail or Username</label>
                  </div>
                  <div className="submit">
                    <a className="btn btn-primary btn-block" href="index.html">
                      Send
                    </a>
                  </div>
                  <div className="text-dark mb-0 fs-13">
                    Forget it,{" "}
                    <a href="signin" className="text-primary">
                      send me back
                    </a>
                    to the sign in.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
