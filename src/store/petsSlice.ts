import { createSlice } from "@reduxjs/toolkit";

export const petsSlice = createSlice({
  name: "pets",
  initialState: [],
  reducers: {
    createPet: (state, action) => {
      console.log(state, action);
    },
    updatePet: (state, action) => {
      console.log(state, action);
    },
    removePet: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { createPet, updatePet, removePet } = petsSlice.actions;

export default petsSlice.reducer;
