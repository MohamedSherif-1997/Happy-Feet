import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

class Sort extends Component {
  render() {
    const {
      handlePriceHigh,
      handlePriceLow,
      handleRelevence,
      disabled,
    } = this.props;
    return (
      <div>
        Sort By:
        <Button onClick={handleRelevence} disabled={disabled}>
          Relevence
        </Button>
        <Button onClick={handlePriceLow}>Price Low-High</Button>
        <Button onClick={handlePriceHigh}>Price High-Low</Button>
      </div>
    );
  }
}

Sort.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handlePriceHigh: PropTypes.func.isRequired,
  handlePriceLow: PropTypes.func.isRequired,
  handleRelevence: PropTypes.func.isRequired,
};

export default Sort;
