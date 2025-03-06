import { createSlice } from "@reduxjs/toolkit";
import { Cafe } from "@/schemas/cafe.schema";

interface CafeState {
  cafes: Cafe[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CafeState = {
  cafes: [],
  isLoading: false,
  error: null,
};

export const cafeSlice = createSlice({
  name: "cafe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default cafeSlice.reducer;
