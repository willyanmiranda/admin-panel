import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "@/types/product";

const initialState: ProductState = {
    title: "",
    subtitle: "",
    description: "",
    price: 0,
    mainImage: "",
    manufacturer: "",
    categoryId: "",
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload;
        },
        setSubtitle(state, action: PayloadAction<string>) {
            state.subtitle = action.payload;
        },
        setDescription(state, action: PayloadAction<string>) {
            state.description = action.payload;
        },
        setPrice(state, action: PayloadAction<number>) {
            state.price = action.payload;
        },
        setMainImage(state, action: PayloadAction<string>) {
            state.mainImage = action.payload;
        },
        setManufacturer(state, action: PayloadAction<string>) {
            state.manufacturer = action.payload;
        },
        setCategoryId(state, action: PayloadAction<string>) {
            state.categoryId = action.payload;
        },
    },
});

export const productReducer = productSlice.reducer;

export const { setTitle, setSubtitle, setDescription, setPrice, setMainImage, setManufacturer, setCategoryId } = productSlice.actions;
