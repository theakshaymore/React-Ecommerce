import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { deleteCategory, getAllCategories } from "./helper/adminapicall";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getAllCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisCategory = (categoryId) => {
    deleteCategory(categoryId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base
      title="Manage Categories"
      description="Update category for tshirts"
      className="container p-4 rounded my-profile-card"
    >
      <div className="card border-0">
        <Link to={`/admin/dashboard`}>
          <button className="btn btn-dark">
            <i className="bi bi-arrow-left-short text-white" />
            Admin Home
          </button>
        </Link>
        <h4 className="card-header text-white my-3 rounded profile-card-header">
          <i class="bi bi-arrow-return-right me-2"></i>
          All Categories
        </h4>
        <div className="row">
          <div className="col-12">
            {categories.map((category, index) => {
              return (
                <div key={index} className="row text-center">
                  <div className="col-4 list-group-item">
                    <h3 className="text-dark text-start">{category.name}</h3>
                  </div>
                  <div className="col-4 list-group-item">
                    <Link
                      className="btn btn-warning rounded"
                      to={`/admin/category/update/${category._id}`}
                    >
                      <span>Update</span>
                    </Link>
                  </div>
                  <div className="col-4 list-group-item">
                    <button
                      onClick={() => {
                        deleteThisCategory(category._id);
                      }}
                      className="btn btn-danger rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default ManageCategories;
