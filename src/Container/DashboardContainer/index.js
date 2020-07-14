import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

//Components
import Filters from "../../Components/filters";
import Sort from "../../Components/sort";
import Products from "../../Components/products";

// Images
import nick1 from "../../images/shoes/nike1.png";
import nick2 from "../../images/shoes/nike2.jpeg";
import nick3 from "../../images/shoes/nike3.jpeg";
import puma1 from "../../images/shoes/puma1.jpeg";
import puma2 from "../../images/shoes/puma2.jpeg";
import leeCooper1 from "../../images/shoes/leeCooper1.jpg";
import leeCooper2 from "../../images/shoes/leeCooper2.jpeg";
import leeCooper3 from "../../images/shoes/leeCooper3.jpg";
import reeBok from "../../images/shoes/reeBok1.jpg";

const style = {
  mainFlex: {
    display: "flex",
    padding: "5px",
  },
  secondFlex: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "20px",
    height: "90vh",
    justifyContent: "space-evenly",
  },
  filter: {
    width: "250px",
    height: "90vh",
    backgroundColor: "WhiteSmoke",
  },
  product: {
    width: "150vh",
    height: "90vh",
    backgroundColor: "floralwhite",
  },
  sort: {
    height: "100px",
    backgroundColor: "floralwhite",
  },
};

const products = [
  {
    name: "Nike React Element 87 Anthracite Black",
    image: nick1,
    price: 1200,
    discount: 50,
    brand: "Nike",
    rating: 4.2,
  },
  {
    name: "Nie Announces Special Edition",
    image: nick2,
    price: 800,
    discount: 50,
    brand: "Nike",
    rating: 4.2,
  },
  {
    name: "Nike VTR sneakers Red/Black",
    image: nick3,
    price: 450,
    discount: 50,
    brand: "Nike",
    rating: 4.2,
  },
  {
    name: "Tan Men Lee Cooper Shoes",
    image: leeCooper1,
    price: 1200,
    discount: 50,
    brand: "LeeCooper",
    rating: 4.2,
  },
  {
    name: "Brown men Leecooper Shoes",
    image: leeCooper2,
    price: 800,
    discount: 50,
    brand: "LeeCooper",
    rating: 4.2,
  },
  {
    name: "Lee Cooper Men's Leather Sneakers",
    image: leeCooper3,
    price: 450,
    discount: 50,
    brand: "LeeCooper",
    rating: 3.8,
  },
  {
    name: "Reebok shoes for Men – Designed",
    image: reeBok,
    price: 1200,
    discount: 50,
    brand: "Reebok",
    rating: 4.6,
  },
  {
    name: "Puma mens-Blue/Black",
    image: puma1,
    price: 800,
    discount: 50,
    brand: "Puma",
    rating: 3.0,
  },
  {
    name: "puma suede shoes",
    image: puma2,
    price: 450,
    discount: 50,
    brand: "Puma",
    rating: 4.0,
  },
];

class DashboardContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.mainFlex}>
          <div className={classes.filter}>
            <Filters />
          </div>
          <div className={classes.secondFlex}>
            <div className={classes.sort}>
              <Sort />
            </div>
            <div className={classes.product}>
              <Products products={products} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

DashboardContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(DashboardContainer);
