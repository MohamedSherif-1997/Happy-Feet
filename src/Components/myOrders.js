import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const style = {
  root: {
    width: "800px",
    margin: "5px 10px 10px 100px",
    display: "flex",
  },
  media: {
    height: 100,
    width: 200,
    paddingTop: "20px",
    paddingLeft: "20px",
    backgroundPosition: "initial",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "green",
    fontSize: "25px",
    padding: "10px 10px 10px 50px",
    fontFamily: '"Times New Roman", Times, serif',
  },
  details: {
    color: "#696969",
  },
  icon: {
    padding: "10px",
    width: "140px",
  },
};

class MyOrders extends Component {
  handleBack = () => {
    this.props.history.push("/happy-shoes/dashboard");
  };
  render() {
    const { classes, myOrders } = this.props;

    return (
      <div style={{ backgroundColor: "floralwhite" }}>
        <Tooltip title="Back" aria-label="My Orders">
          <Button className={classes.icon} onClick={this.handleBack}>
            <KeyboardBackspaceIcon />
          </Button>
        </Tooltip>
        <div className={classes.cardContainer}>
          <div className={classes.title}>My Orders</div>
          {myOrders.length > 0 ? (
            myOrders.map((product, index) => (
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
                  <Typography className={classes.details}>
                    Color:{product.color}
                  </Typography>
                  <Typography className={classes.details}>
                    Seller:{product.seller}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom component="h4">
                    Rs.{product.price}
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography>No Data Available</Typography>
          )}
        </div>
      </div>
    );
  }
}

MyOrders.propTypes = {
  myOrders: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(style)(MyOrders);
