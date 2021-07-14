import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { listAllOrders } from "./helper/adminapicall";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    listAllOrders(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOrders(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  //   const deleteThisCategory = (categoryId) => {
  //     deleteCategory(categoryId, user._id, token).then((data) => {
  //       if (data.error) {
  //         console.log(data.error);
  //       } else {
  //         preload();
  //       }
  //     });
  //   };

  return (
    <Base title="Welcome admin" description="Manage products here">
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <h2 className="mb-5 mt-2">All Orders:</h2>
      <div className="row">
        <div className="col-12">
          {/* <h2 className="text-center text-white my-3">Total 3 products</h2> */}

          {orders.map((order, index) => {
            return (
              <div key={index} className="row text-center mb-2 ">
                <div className="col-4">
                  <h3 className="text-white text-left">{order.user}</h3>
                </div>
                {/* <div className="col-4">
                  <Link
                    className="btn btn-success "
                    to={`/admin/category/update/${order._id}`}
                  >
                    <span className="">Update</span>
                  </Link>
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      deleteThisCategory(order._id);
                    }}
                    className="btn btn-danger "
                  >
                    Delete
                  </button>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Orders;
