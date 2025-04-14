import { configureStore } from "@reduxjs/toolkit";
import bookSliceReducers from "../utils/book-slice";

export const store = configureStore({
    reducer: bookSliceReducers,
});
