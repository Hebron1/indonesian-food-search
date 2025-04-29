import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import usernameReducer from '../features/login/usernameSlice'
import productId from '../features/produk/productSlicer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    username: usernameReducer,
    product: productId
  },
})