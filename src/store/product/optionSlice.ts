import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OptionState } from "@/types/product";

const initialState: { options: OptionState[] } = {
    options: [],
};

const optionSlice = createSlice({
    name: "option",
    initialState,
    reducers: {
        addOption(state, action: PayloadAction<Number>) {
            state.options.push({
                id: Number(action.payload),
                title: '',
                values: []
            })
        },
        updateOption(state, action: PayloadAction<{ index: number; option: OptionState }>) {
            const { id, title, values } = action.payload.option;

            const existingOption = state.options.find((option) => option.id === id);
            if (existingOption) {
                existingOption.title = title;
                existingOption.values = values;
            }
        },
        removeOption(state, action: PayloadAction<number>) {
            state.options = state.options.filter((option) => option.id !== action.payload);
        },
    },
});

export const optionsReducer = optionSlice.reducer;

export const { addOption, updateOption, removeOption } = optionSlice.actions;
