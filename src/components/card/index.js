import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const BookCard = ({ book }) => {
  return (
    <Card sx={{ width: 230, margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          width="100%"
          image={book.formats["image/jpeg"]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book?.title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {book?.authors[0]?.name}
          </Typography>
          <Typography variant="body2">
            Download count : {book?.download_count}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;
