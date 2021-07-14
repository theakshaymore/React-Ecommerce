import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { getCategory, updateCategory } from "./helper/adminapicall";

const UpdateCategory = ({ match }) => {
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

  const preload = (categoryId) => {
    getCategory(categoryId).then((data) => {
      if (data.error) {
        setError(data.error);
        setName("");
      } else {
        setName(data.name);
      }
    });
  };

  useEffect(() => {
    preload(match.params.categoryId);
  }, []);

  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    // Backend request
    updateCategory(match.params.categoryId, user._id, token, { name }).then(
      (data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setName(data.name);
          setError("");
          setSuccess(true);
        }
      }
    );
  };

  const successMessage = () => {
    if (success) {
      return (
        <div className="alert alert-success mt-2">
          <h5 className="text-success">Category updated successfully</h5>
        </div>
      );
    }
  };

  const warningMessage = () => {
    if (error) {
      return (
        <div className="alert alert-danger mt-2">
          <h5 className="text-danger">Failed to update category!</h5>
        </div>
      );
    }
  };

  const myCategoryForm = () => {
    return (
      <form>
        <div className="form-group">
          <p className="lead my-3">Enter new name for category</p>
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
            className="btn btn-outline-danger rounded mb-3 mt-2"
            onClick={onSubmit}
          >
            Update Category
          </button>
        </div>
      </form>
    );
  };

  return (
    <div>
      <Base
        title="Update Category"
        description=""
        className="container p-4 mt-5 rounded profile-card-header"
      >
        {goBack()}
        <div className="row bg-white rounded">
          <div className="col-md-8 offset-md-2">
            {warningMessage()}
            {successMessage()}
            {myCategoryForm()}
          </div>
        </div>
      </Base>
    </div>
  );
};

export default UpdateCategory;
