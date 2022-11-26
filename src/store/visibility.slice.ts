import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Visibility = "todo" | "done" | "all";
export interface VisibilityState {
  visibility: Visibility;
}

const initialState: VisibilityState = {
  visibility: "all",
};

export const visibilitySlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setVisibility: (state, action: PayloadAction<Visibility>) => {
      state.visibility = action.payload;
    },
  },
});

export const { setVisibility } = visibilitySlice.actions;

export const visibilityReducer = visibilitySlice.reducer;
