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
    backgroundColor: "floralwhite",
    paddingTop: "50px",
    paddingBottom: "20px",
  },
};

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "Nike React Element 87 Anthracite",
          image: nick1,
          price: 1200,
          discount: 50,
          brand: "Nike",
          rating: 4.2,
        },
        {
          name: "Nike Announces Special Edition",
          image: nick2,
          price: 800,
          discount: 25,
          brand: "Nike",
          rating: 4.2,
        },
        {
          name: "Nike VTR sneakers Red/Black",
          image: nick3,
          price: 550,
          discount: 40,
          brand: "Nike",
          rating: 4.2,
        },
        {
          name: "Tan Men Lee Cooper Shoes",
          image: leeCooper1,
          price: 1000,
          discount: 50,
          brand: "LeeCooper",
          rating: 4.2,
        },
        {
          name: "Brown men Leecooper Shoes",
          image: leeCooper2,
          price: 700,
          discount: 50,
          brand: "LeeCooper",
          rating: 4.2,
        },
        {
          name: "Lee Cooper Men's Leather Sneakers",
          image: leeCooper3,
          price: 1800,
          discount: 40,
          brand: "LeeCooper",
          rating: 3.8,
        },
        {
          name: "Reebok shoes for Men – Designed",
          image: reeBok,
          price: 400,
          discount: 50,
          brand: "Reebok",
          rating: 4.6,
        },
        {
          name: "Puma mens-Blue/Black",
          image: puma1,
          price: 1500,
          discount: 10,
          brand: "Puma",
          rating: 3.0,
        },
        {
          name: "puma suede shoes",
          image: puma2,
          price: 450,
          discount: 5,
          brand: "Puma",
          rating: 4.0,
        },
      ],
      disabled: true,
    };
  }

  handlePriceHigh = () => {
    let priceHignToLowProducts = this.state.products.sort((object1, object2) =>
      object1.price < object2.price ? 1 : -1
    );
    this.setState({ products: priceHignToLowProducts, disabled: false });
  };

  handlePriceLow = () => {
    let priceHignToLowProducts = this.state.products.sort((object1, object2) =>
      object1.price > object2.price ? 1 : -1
    );
    this.setState({ products: priceHignToLowProducts, disabled: false });
  };

  handleRelevence = () => {
    this.setState({ products: this.state.products, disabled: true });
  };

  render() {
    const { classes } = this.props;
    const products = this.state.products;
    return (
      <>
        <div className={classes.mainFlex}>
          <div className={classes.filter}>
            <Filters />
          </div>
          <div className={classes.secondFlex}>
            <div className={classes.sort}>
              <Sort
                handleRelevence={this.handleRelevence}
                handlePriceLow={this.handlePriceLow}
                handlePriceHigh={this.handlePriceHigh}
                disabled={this.state.disabled}
              />
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
