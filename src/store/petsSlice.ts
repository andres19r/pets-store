import { createSlice } from "@reduxjs/toolkit";

export const petsSlice = createSlice({
  name: "pets",
  initialState: [
    {
      id: 1,
      name: "Scott",
      type: "perro",
      sex: "male",
      imgUrl:
        "https://www.google.com/imgres?q=dog&imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D0.752xw%3A1.00xh%3B0.175xw%2C0%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fg4531%2Fcutest-dog-breeds%2F&docid=2r6Arj4-hBjhNM&tbnid=PpmCvrB3OtU3hM&vet=12ahUKEwjxo6rIoOqFAxXnppUCHTu-AOwQM3oECBcQAA..i&w=1200&h=1197&hcb=2&itg=1&ved=2ahUKEwjxo6rIoOqFAxXnppUCHTu-AOwQM3oECBcQAA ",
    },
  ],
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
