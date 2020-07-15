import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { withStyles } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const style = {
  icon: {
    paddingLeft: "80px",
  },
  sort: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "30px 20px 20px 20px ",
    flexWrap: "wrap",
    color: "green",
  },
  title: {
    fontFamily: '"Times New Roman", Times, serif',
    paddingTop: "10px",
  },
};

class Sort extends Component {
  handleMyOrder = () => {
    this.props.history.push("/happy-shoes/my-orders");
  };

  render() {
    const {
      handlePriceHigh,
      handlePriceLow,
      handleRelevence,
      disabled,
      classes,
    } = this.props;
    return (
      <div className={classes.sort}>
        <div className={classes.title}>Sort By:</div>
        <Button onClick={handleRelevence} disabled={disabled} color="secondary">
          Relevence
        </Button>
        <Button onClick={handlePriceLow} color="secondary">
          Price Low-High
        </Button>
        <Button onClick={handlePriceHigh} color="secondary">
          Price High-Low
        </Button>
        <div className={classes.icon}>
          <Tooltip title="My Orders" aria-label="My Orders">
            <Button onClick={this.handleMyOrder}>
              <ShoppingBasketOutlinedIcon color="secondary" />
            </Button>
          </Tooltip>
        </div>
      </div>
    );
  }
}

Sort.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handlePriceHigh: PropTypes.func.isRequired,
  handlePriceLow: PropTypes.func.isRequired,
  handleRelevence: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(style)(Sort);
