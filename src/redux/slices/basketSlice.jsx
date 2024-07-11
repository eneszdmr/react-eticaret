import { createSlice } from "@reduxjs/toolkit";


const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}
const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    totalAmount: 0
}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}


export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id)
            if (findProduct) {
                const eskiler = state.products.filter((urun) => urun.id !== action.payload.id);
                findProduct.count += action.payload.count
                state.products = [...eskiler, findProduct]
                writeFromBasketToStorage(state.products)
            } else {
                state.products = [...state.products, action.payload]
                writeFromBasketToStorage(state.products)
            }
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer
        },
        calculateTotalAmount: (state) => {
            state.totalAmount = 0
            state.products && state.products.map((urun) => {
                state.totalAmount += (urun.price * urun.count)
            })
        }
    }
})

export const { addToBasket, setDrawer, calculateTotalAmount } = basketSlice.actions
export default basketSlice.reducer