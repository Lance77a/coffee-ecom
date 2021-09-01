import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: persistedReducer,
 middleware: (getDefaultMiddleware) => getDefaultMiddleware({
   serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});