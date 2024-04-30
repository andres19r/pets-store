import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "./petsSlice";
import { Pet } from "../interfaces/pets.interface";

export interface RootState {
  pets: Pet[];
}

export const store = configureStore({
  reducer: {
    pets: petsReducer,
  },
});
