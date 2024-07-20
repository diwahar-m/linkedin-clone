import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // Disable the serializable check middleware
    }),
});
// ----- REDUX ------------
// diff slices has diff info in redux. Ex: userSlice, themeSlice.
// We dispatch an action to change the user in the userSlice.
// checking fot github.
