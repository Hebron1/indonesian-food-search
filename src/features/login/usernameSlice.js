// usernameSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: "",
};

export const usernameSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUsername } = usernameSlice.actions;

export default usernameSlice.reducer;
