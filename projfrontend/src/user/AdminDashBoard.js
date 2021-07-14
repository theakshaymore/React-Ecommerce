import React from "react";
import { Link } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";
import Base from "../core/Base";

const AdminDashBoard = ({ history }) => {
  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header text-white profile-card-header">
          <i class="bi bi-arrow-return-right me-2"></i>
          Admin Navigation
        </h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-success">
              <i class="bi bi-arrow-right-circle-fill me-2"></i>
              Create Category
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/categories" className="nav-link text-success">
              <i class="bi bi-arrow-right-circle-fill me-2"></i>
              Manage Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-success">
              <i class="bi bi-arrow-right-circle-fill me-2"></i>
              Create Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-success">
              <i class="bi bi-arrow-right-circle-fill me-2"></i>
              Manage Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-success">
              <i class="bi bi-arrow-right-circle-fill me-2"></i>
              Manage Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
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
              <p className="badge text-white bg-success font-size-sm col-12">
                You have ADMIN privileges
              </p>
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

  return (
    <Base
      title="Admin Dashboard"
      description="manage all of products here.."
      className="container p-4 rounded my-profile-card"
    >
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">{adminRightSide()}</div>
        <div className="col-lg-9 col-md-8 col-sm-12">{adminLeftSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
