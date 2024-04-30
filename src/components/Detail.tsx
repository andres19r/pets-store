import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";

export interface PetContent {
  name: string;
  type: string;
  sex: string;
  imgUrl: string;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Detail({ name, type, sex, imgUrl }: PetContent) {
  const [open, setOpen] = useState(false);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => setOpen(true)} variant="contained" size="small">
          Details
        </Button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={style}>
            <img src={imgUrl} alt={name + " image"} />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              {type}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {sex}
            </Typography>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}

export default Detail;
