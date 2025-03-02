import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cafe } from "@/schemas/cafe.schema";
import { ApiEndpointList } from "@/constants/api-endpoint.constant";

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
  extraReducers: () => {},
});

export default cafeSlice.reducer;
