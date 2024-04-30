import Detail from "./Detail";
import { Pet } from "../interfaces/pets.interface";
import { useFetchPets } from "../hooks/useFetchPets";
import { Button, CircularProgress } from "@mui/material";
import "./List.css";
import { Link } from "react-router-dom";

function List() {
  const { pets, isLoading } = useFetchPets();

  return (
    <>
      <h1>Pet's List</h1>
      <Button component={Link} to="/register" variant="contained">
        Register a new Pet
      </Button>

      <div className="loader-container">
        {isLoading && <CircularProgress></CircularProgress>}
      </div>
      <div>
        {pets.map((pet: Pet) => (
          <Detail
            key={pet.id}
            name={pet.name}
            type={pet.type}
            sex={pet.sex}
            imgUrl={pet.imgUrl}
          />
        ))}
      </div>
    </>
  );
}

export default List;
