import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import Filters from "../../Components/filters";
import Sort from "../../Components/sort";
import Products from "../../Components/products";

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
              <Products />
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
