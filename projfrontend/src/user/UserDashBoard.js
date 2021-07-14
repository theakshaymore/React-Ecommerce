import React from "react";
import { Link } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";
import Base from "../core/Base";

const UserDashBoard = ({ history }) => {
  const userLeftSide = () => {
    const {
      user: { name, email, role },
    } = isAutheticated();
    return (
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
              alt="Profile Image"
              className="rounded-circle"
              width="150"
            />
            <div className="mt-3">
              <h4>{name}</h4>
              <p className="text-muted font-size-sm">{email}</p>
              {isAutheticated() && (
                <button
                  className="btn btn-outline-warning"
                  onClick={() => {
                    signout(() => {
                      history.push("/");
                    });
                  }}
                >
                  Signout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const userRightSide = () => {
    return (
      <div className="card">
        <h4 className="card-header profile-card-header text-white">
          <i class="bi bi-arrow-return-right me-2"></i>
          User Navigation
        </h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/" className="nav-link text-success">
              <i class="bi bi-arrow-right-circle-fill me-2"></i>
              Edit Profile
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/" className="nav-link text-success">
              <i class="bi bi-arrow-right-circle-fill me-2"></i>
              Delete Account
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/" className="nav-link text-success">
              <i class="bi bi-arrow-right-circle-fill me-2"></i>
              Add Address
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/" className="nav-link text-success">
              <i class="bi bi-arrow-right-circle-fill me-2"></i>
              Edit Address
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base
      title="User DashBoard"
      description="manage all of your information here.."
      className="container p-4 rounde my-profile-card"
    >
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">{userLeftSide()}</div>
        <div className="col-lg-9 col-md-8 col-sm-12">{userRightSide()}</div>
      </div>
    </Base>
  );
};

export default UserDashBoard;
