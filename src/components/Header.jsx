import React, { useState } from "react";
import "../css/Header.css";
import { BsBasket } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { IoMoonSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

function Header() {
  const [theme, setTheme] = useState(true);
  const { products } = useSelector((store) => store.basket);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const changeTheme = () => {
    const root = document.getElementById("root");

    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
    setTheme(!theme);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        className="flex-row"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <img className="logo" alt="logo" src="./src/images/logo.png" />
        <p className="logo-text">Enes A.Ş LTD</p>
      </div>
      <div className="flex-row">
        <input className="input-text" type="text" placeholder="Birşey Ara" />

        <div>
          {theme ? (
            <IoMoonSharp className="icon" onClick={changeTheme} />
          ) : (
            <FiSun className="icon" onClick={changeTheme} />
          )}
          <Badge onClick={() => dispatch(setDrawer())} color="error" badgeContent={products.length}>
            <BsBasket style={{ marginRight: "10px" }} className="icon" />

          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
