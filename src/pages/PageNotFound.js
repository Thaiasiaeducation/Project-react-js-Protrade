import React from "react";

function PageNotFound() {
  return (
    <>
      {/* Page */}
      <div className="page page-h">
        <div className="page-content zindex-10">
          <div className="container text-center">
            <div className="display-1 mb-5 font-weight-semibold2">404</div>
            <h1 className="h1 mb-3 font-weight-semibold2">Page Not Found</h1>
            <p className="h4 font-weight-normal mb-7 leading-normal">
              Oops!!!! you tried to access a page which is not available. go
              back to Home
            </p>
            <a className="btn btn-secondary px-6" href="index.html">
              <i className="fe fe-arrow-left mr-2" /> Back To Home
            </a>
            <img
              src="../../assets/images/4.png"
              alt=""
              className="img-absolute-bottom"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
