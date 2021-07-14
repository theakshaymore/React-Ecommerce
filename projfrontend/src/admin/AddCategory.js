import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { createCategory } from "./helper/adminapicall";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAutheticated();

  const goBack = () => {
    return (
      <div className="mt-1">
        <Link
          className="btn btn-sm btn-dark mb-3 rounded"
          to="/admin/dashboard"
        >
          <i className="bi bi-arrow-left-short text-white" />
          Admin Home
        </Link>
      </div>
    );
  };

  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    // Backend request
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return (
        <div className="alert alert-success">
          <h5 className="text-success">Category created successfully</h5>
        </div>
      );
    }
  };

  const warningMessage = () => {
    if (error) {
      return (
        <div className="alert alert-danger">
          <h5 className="text-danger">Failed to create category!</h5>
        </div>
      );
    }
  };

  const myCategoryForm = () => {
    return (
      <form>
        <div className="form-group my-2">
          <p className="lead">Enter the category</p>
          <input
            type="text"
            className="form-control my-3"
            autoFocus
            required
            placeholder="For Ex. Summer"
            value={name}
            onChange={handleChange}
          ></input>
          <button
            className="btn btn-outline-danger rounded mb-3"
            onClick={onSubmit}
          >
            Create Category
            <i class="bi bi-plus-circle-fill m-1" />
          </button>
        </div>
      </form>
    );
  };

  return (
    <Base
      title="Add Category"
      description="Add a new category for new tshirts"
      className="container p-4 mt-5 profile-card-header"
    >
      {goBack()}
      <div className="row bg-light rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {warningMessage()}
          {myCategoryForm()}
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
