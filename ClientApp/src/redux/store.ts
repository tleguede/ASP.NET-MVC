import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {libraryApi} from "./apis/library";

export const store = configureStore({
    reducer: {
        [libraryApi.reducerPath]: libraryApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(libraryApi.middleware)

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
