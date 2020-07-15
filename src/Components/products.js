import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Chip from "@material-ui/core/Chip";
import StarRateIcon from "@material-ui/icons/StarRate";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    marginBottom: "10px",
    marginLeft: "15px",
  },
  media: {
    height: 100,
    width: 200,
    paddingTop: "20px",
    paddingLeft: "20px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    width: "100%",
  },
  image: {
    paddingTop: "20px",
    paddingLeft: "25px",
    width: "300px",
  },
  rating: {
    backgroundColor: "green",
    color: "white",
  },
  discount: {
    color: "green",
    fontSize: "15px",
    paddingLeft: "3px",
  },
  price: {
    paddingLeft: "3px",
    fontSize: "10px",
  },
  buyButton: {
    color: "black",
    backgroundColor: "white",
    border: "2px solid green",
  },
  button: {
    paddingLeft: "90px",
  },
});

export default function Products(props) {
  const { products, history } = props;
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      {products.length > 0 ? (
        products.map((product, index) => (
          <Card className={classes.root} key={index}>
            <CardActionArea className={classes.image}>
              <CardMedia
                className={classes.media}
                image={product.image}
                title={product.name}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom component="h4">
                {product.name}
              </Typography>
              <Chip
                variant="outlined"
                size="small"
                label={product.rating}
                icon={<StarRateIcon style={{ color: "white" }} />}
                className={classes.rating}
              />
              <span className={classes.button}>
                <Button
                  size="small"
                  className={classes.buyButton}
                  onClick={() => {
                    history.push("/happy-shoes/payment");
                  }}
                >
                  Buy
                </Button>
              </span>
              <Typography>
                &#8377;
                {product.price - (product.price * product.discount) / 100}
                <s className={classes.price}>{`${product.price}`}</s>
                <span className={classes.discount}>
                  {product.discount}&#x25; off
                </span>
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>No Data Available</Typography>
      )}
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};
