import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, title, image, description } = product;

  const navigate = useNavigate();

  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <div>
        <p style={{ textAlign: "center", height: "50px" }}>{title}</p>
        <h3 style={{ textAlign: "center" }}>{price}₺</h3>
      </div>
      <div className="flex-row">
        <button onClick={()=> navigate("/product-details/"+id)} className="button-detail">Detayına Git</button>
      </div>
    </div>
  );
}

export default Product;
