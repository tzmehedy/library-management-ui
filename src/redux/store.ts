
import { configureStore } from "@reduxjs/toolkit";
import { bookApis } from "./api/bookApis";

export const store = configureStore({
    reducer: {
        [bookApis.reducerPath] : bookApis.reducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(bookApis.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


