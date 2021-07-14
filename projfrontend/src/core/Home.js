import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <div>
      <Base
        title="Embrand"
        description="Be exclusive, Be Devine, Be yourself."
        className="my-5 py-5"
      >
        <div className="row text-center">
          <div className="row">
            {products.map((product, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <Card product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </Base>
      <footer className="footer mt-auto">
        <div className="container-fluid bg-dark text-white text-center py-3">
          <h5>If you got any questions, feel free to reach out</h5>
          <button className="btn btn-warning btn-md">Contact us</button>
        </div>
      </footer>
    </div>
  );
}
