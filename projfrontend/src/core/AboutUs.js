import React from "react";
import Base from "./Base";

function AboutUs() {
  return (
    <Base>
      <div className="container-fluid about-con">
        <div className="jumbotron text-center about-jumbo">
          <h2 className="display-4 text-white">Embrand.com</h2>
          <p className="lead text-white">We specialize in blablabla</p>
          <form className="col-6 container">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
              <div className="input-group-btn">
                <button type="button" className="btn btn-danger">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
        {/*  */}
        <div className="container mt-5">
          <h2 className="text-center text-warning mb-5">CONTACT</h2>
          <div className="row">
            <div className="col-sm-5">
              <p>Contact us and we'll get back to you within 24 hours.</p>
              <p>
                <span>
                  <i className="bi bi-geo-alt-fill"></i> Mumbai, IND
                </span>
              </p>
              <p>
                <i className="bi bi-telephone"></i> +00 1515151515
              </p>
              <p>
                <i className="bi bi-envelope me-2"></i>
                moreakshay725@gmail.com
              </p>
            </div>
            <div className="col-sm-7">
              <div className="row">
                <div className="col-sm-6 form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </div>
                <div className="col-sm-6 form-group ">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <textarea
                className="form-control mt-3"
                id="comments"
                name="comments"
                placeholder="Comment"
                rows="5"
              ></textarea>
              <br />
              <div className="row">
                <div className="col-sm-12 form-group">
                  <button
                    className="btn btn-default pull-right my-btn rounded"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-4">
        © 2021 Copyright:
        <span className="text-reset fw-bold">EmBrand.com</span>
      </div>
    </Base>
  );
}

export default AboutUs;
