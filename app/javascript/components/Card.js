import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import img from "../../assets/images/filip.jpg";
import { Text } from "./styled";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: "300px",
    margin: "auto",
  },
  img: {
    height: "212px",
    maxHeight: "300px",
    width: "300px",
  },
});

export default function ImgMediaCard({ id, title, body }) {
  const classes = useStyles();
  console.log(id, title, body);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component={Link}
          to={`/article/${id}`}
          className={classes.img}
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Text gutterBottom variant="h5" component="h2" mycolor="black">
            {title}
          </Text>
          <Text variant="body2" color="textSecondary" component="p" mycolor="">
            {body}
          </Text>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          component={Link}
          to={`/article/${id}`}
          size="small"
          color="primary"
        >
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
