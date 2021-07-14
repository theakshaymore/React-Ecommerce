import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  //   function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "Product";
  const cartDescrption = product ? product.description : "Product description";
  const cartPrice = product ? product.price : "Product Price";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block col-12 mt-2  rounded my-btn"
        >
          Add to Cart
          {/* <i className="bi bi-bag add-cart-icon" /> */}
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block col-12 mt-2 rounded my-btn  "
        >
          Remove from cart <i class="bi bi-archive" />
        </button>
      )
    );
  };

  return (
    <div className="card text-dark my-card">
      {/* <div className="card-header lead">{cartTitle}</div> */}
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead font-weight-normal text-wrap">{cartTitle}</p>
        <p className="text-wrap text-start ms-3">{cartDescrption}</p>
        <p className="text-center">
          <span>
            <i class="bi bi-star-fill text-warning px-1" />
          </span>
          <span>
            <i class="bi bi-star-fill text-warning px-1" />
          </span>
          <span>
            <i class="bi bi-star-fill text-warning px-1" />
          </span>
          <span>
            <i class="bi bi-star-half text-warning px-1" />
          </span>
          <span>
            <i class="bi bi-star text-warning px-1" />
          </span>
        </p>
        <div className="row">
          <div className="col-6 mt-2">{showAddToCart(addtoCart)}</div>
          <p className="col-6 btn rounded btn-sm mt-3 p-2 my-btn">
            $ {cartPrice}
          </p>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
