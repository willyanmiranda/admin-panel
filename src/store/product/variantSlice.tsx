import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Variant } from "@/types/product";

interface VariantState {
  variants: Variant[];
}

const initialState: VariantState = {
  variants: [],
};

const variantSlice = createSlice({
  name: "variant",
  initialState,
  reducers: {
    setVariants(state, action: PayloadAction<Variant[]>) {
      state.variants = action.payload;
    },
    updatePrice(state, action: PayloadAction<{ id: number; price: number }>) {
      const { id, price } = action.payload;
      const variant = state.variants.find((v) => v.id === id);
      if (variant) {
        variant.price = price;
      }
    },
    updateStatus(state, action: PayloadAction<number>) {
        const variant = state.variants.find((v) => v.id === action.payload);
        if (variant) {
          variant.active = !variant.active;
        }
    },
  },
});

export const { setVariants, updatePrice, updateStatus } = variantSlice.actions;

export const variantsReducer = variantSlice.reducer;
