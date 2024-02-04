import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "./slices/demoSlice";
import contactoComponentSlice from "./slices/contactoComponentSlice";
import authSlice from "./slices/authSlice";
export const store = configureStore({
    reducer : {
        demoStore: demoSlice,
        contactoComponentStore: contactoComponentSlice,
        authStore: authSlice
    }
})