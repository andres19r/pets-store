import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Pet } from "../interfaces/pets.interface";

export const useFetchPets = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const storePets = useSelector((state: RootState) => state.pets);

  useEffect(() => {
    setTimeout(() => {
      setPets(storePets);
      setIsLoading(false);
    }, 2000);
  }, [storePets]);

  return {
    pets,
    isLoading,
  };
};
