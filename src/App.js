import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import DashboardContainer from "./Container/DashboardContainer";

const AppStyle = {
  DashboardContainer: {
    height: "100%",
    backgroundColor: "white",
    padding: "5px",
  },
};

function App(props) {
  return (
    <div className={props.classes.DashboardContainer}>
      <DashboardContainer />
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(AppStyle)(App);
