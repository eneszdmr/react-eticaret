import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import appReducer from "./slices/appSlice";
import basketReducer from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
    basket: basketReducer,
  },
});
