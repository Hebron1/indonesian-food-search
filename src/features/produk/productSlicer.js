import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: "0089686120714",
    item: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductId: (state, action) => {
            state.id = action.payload
        },
        setProductItems: (state, action) => {
            state.item = action.payload
        }
    }
})

export const { setProductId, setProductItems } = productSlice.actions;

export default productSlice.reducer;