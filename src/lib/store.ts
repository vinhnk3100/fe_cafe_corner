import { configureStore } from "@reduxjs/toolkit";
import cafeReducer from "@/lib/features/cafeSlice";

export const store = configureStore({
  reducer: {
    cafe: cafeReducer,
  },
});

export type RootState = {
  cafe: ReturnType<typeof cafeReducer>;
};
export type AppDispatch = typeof store.dispatch;
