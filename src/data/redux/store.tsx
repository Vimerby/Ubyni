
import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './slices/languageSlice'
import itemReducer from './slices/dataSlice';
import UsersReducer from './slices/UsersSlice';
import ProfileReducer from './slices/ProfileSlice';

export const store = configureStore({
  reducer: {
    languages: languageReducer,
    items: itemReducer,
    users: UsersReducer,
    profile:ProfileReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch