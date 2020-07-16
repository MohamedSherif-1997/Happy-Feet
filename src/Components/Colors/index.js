import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";

const style = {
  color: {
    fontFamily: '"Times New Roman", Times, serif',
    paddingTop: "20px",
    color: "black",
  },
  radioGroup: {
    paddingLeft: "15px",
    paddingTop: "5px",
  },
};

class ColorsPicker extends Component {
  render() {
    const { classes, color, checked } = this.props;

    return (
      <FormControl component="fieldset" onChange={checked}>
        <FormLabel className={classes.color}>Colors</FormLabel>
        <RadioGroup
          aria-label="color"
          name="color"
          value={color}
          className={classes.radioGroup}
        >
          <FormControlLabel value="Black" control={<Radio />} label="Black" />
          <FormControlLabel value="Red" control={<Radio />} label="Red" />
          <FormControlLabel value="Blue" control={<Radio />} label="Blue" />
          <FormControlLabel value="Brown" control={<Radio />} label="Brown" />
        </RadioGroup>
      </FormControl>
    );
  }
}

ColorsPicker.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  checked: PropTypes.func.isRequired,
};

export default withStyles(style)(ColorsPicker);
