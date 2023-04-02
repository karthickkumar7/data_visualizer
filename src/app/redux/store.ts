import { configureStore } from '@reduxjs/toolkit';
import countries from './reducers/countries';

export const store = configureStore({
    reducer: {
        countries,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
