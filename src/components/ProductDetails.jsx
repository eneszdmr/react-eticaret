import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import "../css/ProductDetails.css";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { addToBasket, calculateTotalAmount } from "../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams();

  const { products, selectedProduct } = useSelector((store) => store.product);

  const { title, description, price, image } = selectedProduct;

  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    getProductByID();
  }, []);

  const addBasket = () => {
    const payload = {
      id,
      title,
      description,
      price,
      image,
      count
    }
    dispatch(addToBasket(payload));
    dispatch(calculateTotalAmount());
  };

  const incremenet = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const getProductByID = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  return (
    <div className="product-box">
      <div style={{ marginRight: "40px" }}>
        <img src={image} width={300} height={500} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
        <h3 className="desc">{description}</h3>
        <h1 className="price">{price}₺</h1>
        <div className="plusandminus">
          <FaCirclePlus style={{ marginRight: "15px" }} onClick={incremenet} />
          <span style={{ marginRight: "15px", fontWeight: "bold" }}>
            {count}
          </span>
          <FaCircleMinus onClick={decrement} />
        </div>
        <div>
          <button
            onClick={addBasket}
            className="buttonSepeteEkle"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
