import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormGroup,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, createPet } from "../store";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [sex, setSex] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const pets = useSelector((state: RootState) => state.pets);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(
      createPet({
        id: pets[pets.length - 1].id + 1,
        name,
        type,
        sex,
        imgUrl,
      })
    );
    navigate("/");
  };
  return (
    <>
      <h1>Register your pet</h1>
      <Button
        style={{ marginBottom: "10px" }}
        component={Link}
        to="/"
        variant="outlined"
      >
        Home Page
      </Button>
      <FormGroup>
        <div>
          <FormControl>
            <InputLabel htmlFor="petName">Pet's Name</InputLabel>
            <TextField
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="petName"
            />
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="petType">Tipo Mascota</InputLabel>
            <Select label="Tipo Mascota" value={type}>
              <MenuItem onClick={() => setType("Perro")} value="Perro">
                Perro
              </MenuItem>
              <MenuItem onClick={() => setType("Gato")} value="Gato">
                Gato
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <FormControl>
          <FormLabel id="petGender">Gender</FormLabel>
          <RadioGroup defaultValue="female" name="radio-buttons-group">
            <FormControlLabel
              onClick={() => setSex("female")}
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              onClick={() => setSex("male")}
              value="male"
              control={<Radio />}
              label="Male"
            />
          </RadioGroup>
        </FormControl>

        <div>
          <FormControl>
            <InputLabel htmlFor="petImg">Pet's Image</InputLabel>
            <TextField
              variant="outlined"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              id="petImg"
            />
          </FormControl>
        </div>
        <Button
          style={{ width: "250px", marginTop: "10px" }}
          onClick={handleSubmit}
          variant="contained"
        >
          Register
        </Button>
      </FormGroup>
    </>
  );
}

export default Create;
