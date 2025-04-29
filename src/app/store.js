import { configureStore } from '@reduxjs/toolkit'
import productId from '../features/produk/productSlicer'

export const store = configureStore({
  reducer: {
    product: productId
  },
})