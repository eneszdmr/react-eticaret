import React from "react";
import "../css/Product.css";

function Product({ product }) {
  const { id, price, title, image, description } = product;

  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <div>
        <p style={{ textAlign: "center", height: "50px" }}>{title}</p>
        <h3 style={{ textAlign: "center" }}>{price}₺</h3>
      </div>
      <div className="flex-row">
        <button className="button-detail">Detayına Git</button>
      </div>
    </div>
  );
}

export default Product;
