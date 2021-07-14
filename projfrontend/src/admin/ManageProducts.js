import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { deleteProduct, getAllProducts } from "./helper/adminapicall";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getAllProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisProduct = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base
      title="Manage Products"
      description="Update and Delete products here"
      className="container p-4 rounded my-profile-card"
    >
      <div className="card border-0">
        <Link to={`/admin/dashboard`}>
          <button className="btn btn-dark">
            <i className="bi bi-arrow-left-short text-white" />
            Admin Home
          </button>
        </Link>
        <h2 className="card-header text-white my-3 rounded profile-card-header">
          <i class="bi bi-arrow-return-right me-2"></i>
          All products:
        </h2>
        <div className="row">
          <div className="col-12">
            {products.map((product, index) => {
              return (
                <div key={index} className="row text-center">
                  <div className="col-4 list-group-item">
                    <h3 className="text-dark text-start">{product.name}</h3>
                  </div>
                  <div className="col-4 list-group-item">
                    <Link
                      className="btn btn-warning rounded"
                      to={`/admin/product/update/${product._id}`}
                    >
                      <span>Update</span>
                    </Link>
                  </div>
                  <div className="col-4 list-group-item">
                    <button
                      onClick={() => {
                        deleteThisProduct(product._id);
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

export default ManageProducts;
