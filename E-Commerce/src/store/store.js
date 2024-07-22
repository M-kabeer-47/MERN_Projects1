import category from "./category";

import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducer:{
        category: category
    }
})