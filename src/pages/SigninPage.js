import React from "react";

function SigninPage() {
  return (
    <>
      {/*Login-Section*/}
      <section className="sptb">
        <div className="container customerpage">
          <div className="row">
            <div className="single-page">
              <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
                <div className="wrapper wrapper2 text-left">
                  <form id="login" className="card-body" tabIndex={500}>
                    <h4 className="font-weight-semibold2 pb-4">
                      Sign In Account
                    </h4>
                    <div className="mail">
                      <input type="email" name="mail" />
                      <label>Mail or Username</label>
                    </div>
                    <div className="passwd">
                      <input type="password" name="password" />
                      <label>Password</label>
                    </div>
                    <div className="submit">
                      <a
                        className="btn btn-primary btn-block"
                        href="index.html"
                      >
                        Login
                      </a>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p className="text-dark mb-0 fs-12">
                          Don't have account?
                          <a href="signup" className="text-primary ml-1">
                            Sign UP
                          </a>
                        </p>
                      </div>
                      <div className="col col-auto">
                        <p className="mb-0 mt-0 fs-12">
                          <a href="Forgot">Forgot Password</a>
                        </p>
                      </div>
                    </div>
                  </form>
                  <hr className="divider" />
                  <div className="card-body text-center">
                    <ul className="mb-0 login-social-icons">
                      <li className="btn-facebook">
                        <a className="social-icon" href>
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li className="btn-twitter">
                        <a className="social-icon" href>
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="btn-google">
                        <a className="social-icon" href>
                          <i className="fa fa-google-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/Login-Section*/}
    </>
  );
}

export default SigninPage;
