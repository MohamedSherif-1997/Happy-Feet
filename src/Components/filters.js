import React, { Component } from "react";
import PropTypes from "prop-types";

import NativeSelect from "@material-ui/core/NativeSelect";
import { withStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import ColorsPicker from "../Components/Colors/";
import SearchFilter from "../Components/searchFilter";

const style = {
  select: {
    display: "flex",
    paddingBottom: "20px",
  },
  filter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  title: {
    height: "50px",
    paddingTop: "20px",
  },
  between: {
    padding: "10px",
  },
  price: {
    fontFamily: '"Times New Roman", Times, serif',
    paddingTop: "10px",
  },
  clear: {
    paddingTop: "15px",
    paddingBottom: "20px",
    textAlign: "end",
  },
  clearButton: {
    width: "60px",
    height: "30px",
    backgroundColor: "#659EC7",
    color: "black",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#95B9C7",
    },
  },
};

class Filters extends Component {
  render() {
    const {
      min,
      max,
      classes,
      handleMaxChange,
      handleMinChange,
      color,
      checked,
    } = this.props;
    return (
      <div className={classes.filter}>
        <div className={classes.title}>Filters</div>
        <Divider />
        <div className={classes.price}> Price:</div>
        <div className={classes.select}>
          <div>
            <NativeSelect
              value={min}
              onChange={handleMinChange}
              inputProps={{
                name: "min",
                id: "min-native-label-placeholder",
              }}
            >
              <option value={0}>Min</option>
              <option value={200}>200</option>
              <option value={500}>500</option>
              <option value={800}>800</option>
            </NativeSelect>
          </div>
          <div className={classes.between}>to</div>
          <div>
            <NativeSelect
              value={max}
              onChange={handleMaxChange}
              inputProps={{
                name: "max",
                id: "max-native-label-placeholder",
              }}
            >
              <option value={2500}>Max</option>
              <option value={1200}>1200</option>
              <option value={1500}>1500</option>
              <option value={2000}>2000</option>
            </NativeSelect>
          </div>
        </div>
        <Divider />
        <div>
          <SearchFilter />
        </div>
        <Divider />
        <div>
          <ColorsPicker color={color} checked={checked} />
        </div>
        <Divider />
        <div className={classes.clear}>
          <Button type="reset" className={classes.clearButton}>
            Clear
          </Button>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMaxChange: PropTypes.func.isRequired,
  handleMinChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  checked: PropTypes.func.isRequired,
};

export default withStyles(style)(Filters);
