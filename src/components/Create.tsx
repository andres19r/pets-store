import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  FormGroup,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";

function Create() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [sex, setSex] = useState("");
  const [img, setImg] = useState("");
  return (
    <>
      <h2>Register your pet</h2>
      <FormGroup>
        <div>
          <FormControl>
            <InputLabel htmlFor="petName">Pet's Name</InputLabel>
            <Input
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
              <MenuItem value="Perro">Perro</MenuItem>
              <MenuItem value="Gato">Gato</MenuItem>
            </Select>
          </FormControl>
        </div>

        <FormControl>
          <FormLabel id="petGender">Gender</FormLabel>
          <RadioGroup defaultValue="female" name="radio-buttons-group">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>

        <div>
          <FormControl>
            <InputLabel htmlFor="petImg">Pet's Image</InputLabel>
            <Input
              value={img}
              onChange={(e) => setImg(e.target.value)}
              id="petImg"
            />
          </FormControl>
        </div>
      </FormGroup>
    </>
  );
}

export default Create;
