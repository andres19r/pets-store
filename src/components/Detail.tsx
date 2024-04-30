import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export interface PetContent {
  name: string;
  type: string;
  sex: string;
  imgUrl: string;
}

function Detail({ name, type, sex, imgUrl }: PetContent) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imgUrl} title={`name ${imgUrl}`} />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          {type}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {sex}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Detail;
