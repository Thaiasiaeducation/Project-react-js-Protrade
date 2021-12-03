import React from "react";

function SignupPage() {
  return (
    <>
      {/*Login-Section*/}
      <section className="sptb">
        <div className="container customerpage">
          <div className="row">
            <div className="single-page">
              <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
                <div className="wrapper wrapper2 text-left">
                  <form id="Register" className="card-body" tabIndex={500}>
                    <h4 className="font-weight-semibold2 pb-4">
                      Sign Up Account
                    </h4>
                    <div className="name">
                      <input type="text" name="name" />
                      <label>Name</label>
                    </div>
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
                        Register
                      </a>
                    </div>
                    <p className="text-dark mb-0 fs-13">
                      Already have an account?
                      <a href="signin" className="text-primary ml-1">
                        Sign In
                      </a>
                    </p>
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

export default SignupPage;
