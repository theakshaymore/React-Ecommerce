import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "",
  description = "",
  className = "p-4",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid wrapper">
      <div className="jumbotron text-center rounded my-jumbo">
        <h2 className="display-4 my-jumo-btn">{title}</h2>
        <p className="lead text-danger my-jumo-btn">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    {/* Footer */}
    {/* <footer className="footer mt-auto">
      <div className="container-fluid bg-dark text-white text-center py-3">
        <h5>If you got any questions, feel free to reach out</h5>
        <button className="btn btn-warning btn-md">Contact us</button>
      </div>
    </footer> */}
  </div>
);

export default Base;
