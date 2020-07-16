import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

//Components
import Filters from "../../Components/filters";
import Sort from "../../Components/sort";
import Products from "../../Components/products";

// Constants
import { PRODUCTS_DETAILS } from "../../constants/string";

const style = {
  DashboardContainer: {
    height: "100%",
    backgroundColor: "white",
    padding: "5px",
  },
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
      products: [],
      disabled: true,
      minPrice: 0,
      maxPrice: 2500,
      color: " ",
    };
  }

  componentDidMount() {
    this.setState({ products: PRODUCTS_DETAILS });
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

  handleMinChange = (e) => {
    const min = e.target.value;
    const max = this.state.maxPrice;
    this.handlePriceRange(min, max);
  };

  handleMaxChange = (e) => {
    const max = e.target.value;
    const min = this.state.minPrice;
    this.handlePriceRange(min, max);
  };

  handlePriceRange = (min, max) => {
    const products = this.state.products;
    let priceRangeProducts = products.filter((object1) => {
      let rate = object1.price - (object1.price * object1.discount) / 100;
      if (min <= rate && max >= rate) {
        return true;
      }
    });
    this.setState({
      products: priceRangeProducts,
      minPrice: min,
      maxPrice: max,
    });
  };

  checked = (e) => {
    const colorRangeProducts = [];
    const color = e.target.value;
    const products = this.state.products;
    products.forEach((object1) =>
      object1.color === color ? colorRangeProducts.push(object1) : -1
    );
    this.setState({ color: color, products: colorRangeProducts });
  };

  render() {
    const { classes, history } = this.props;
    const products = this.state.products;
    const { minPrice, maxPrice, color } = this.state;
    return (
      <div className={classes.DashboardContainer}>
        <div className={classes.mainFlex}>
          <div className={classes.filter}>
            <Filters
              handleMaxChange={this.handleMaxChange}
              handleMinChange={this.handleMinChange}
              min={minPrice}
              max={maxPrice}
              color={color}
              checked={(e) => {
                this.checked(e);
              }}
            />
          </div>
          <div className={classes.secondFlex}>
            <div className={classes.sort}>
              <Sort
                handleRelevence={() => {
                  this.handleRelevence();
                }}
                handlePriceLow={this.handlePriceLow}
                handlePriceHigh={this.handlePriceHigh}
                disabled={this.state.disabled}
                history={history}
              />
            </div>
            <div className={classes.product}>
              <Products products={products} history={history} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DashboardContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(style)(DashboardContainer);
