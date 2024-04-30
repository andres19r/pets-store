import { useSelector } from "react-redux";
import { RootState } from "../store";
import Detail, { PetContent } from "./Detail";

function List() {
  const pets = useSelector((state: RootState) => state.pets);

  return (
    <>
      <h1>Pet's List</h1>
      <div>
        {pets.map((pet: PetContent) => (
          <Detail
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
