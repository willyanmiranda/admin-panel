import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./product/productSlice";
import { optionsReducer } from "./product/optionSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        options: optionsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;