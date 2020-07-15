import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import PropTypes from "prop-types";

import Styles from "../../Utils/Style";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import Card from "../../Components/card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../../Utils/cardUtils";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      cancelMessage: false,
    };
  }

  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  44;

  handleBack = async () => {
    await this.sleep(300);
    this.setState({ cancelMessage: true });
  };

  onSubmit = async () => {
    await this.sleep(300);
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
    this.props.history.push("/happy-shoes/dashboard");
  };

  handlecancelMessage = () => {
    this.setState({ cancelMessage: false });
    this.props.history.push("/happy-shoes/dashboard");
  };

  render() {
    return (
      <>
        <Tooltip title="Back" aria-label="My Orders">
          <Button
            style={{ padding: "10px", width: "140px" }}
            onClick={this.handleBack}
          >
            <KeyboardBackspaceIcon />
          </Button>
        </Tooltip>
        <Styles>
          <div
            style={{
              color: "green",
              fontSize: "25px",
              padding: "10px 10px 10px 50px",
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            Enter Your Card Details!!
          </div>
          <Form
            onSubmit={this.onSubmit}
            render={({
              handleSubmit,
              form,
              submitting,
              pristine,
              values,
              active,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Card
                    number={values.number || ""}
                    name={values.name || ""}
                    expiry={values.expiry || ""}
                    cvc={values.cvc || ""}
                    focused={active}
                  />
                  <div>
                    <Field
                      name="number"
                      component="input"
                      type="text"
                      pattern="[\d| ]{16,22}"
                      placeholder="Card Number"
                      format={formatCreditCardNumber}
                    />
                  </div>
                  <div>
                    <Field
                      name="name"
                      component="input"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <Field
                      name="expiry"
                      component="input"
                      type="text"
                      pattern="\d\d/\d\d"
                      placeholder="Valid Thru"
                      format={formatExpirationDate}
                    />
                    <Field
                      name="cvc"
                      component="input"
                      type="text"
                      pattern="\d{3,4}"
                      placeholder="CVC"
                      format={formatCVC}
                    />
                  </div>
                  <div className="buttons">
                    <button type="submit" disabled={submitting}>
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              );
            }}
          />
          <Snackbar
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
          >
            <Alert onClose={this.handleClose} severity="success">
              Payment Successfully Completed!!
            </Alert>
          </Snackbar>
          <Snackbar
            open={this.state.cancelMessage}
            autoHideDuration={6000}
            onClose={this.handlecancelMessage}
          >
            <Alert onClose={this.handlecancelMessage} severity="info">
              Canceled the payment process..!
            </Alert>
          </Snackbar>
        </Styles>
      </>
    );
  }
}

Payment.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Payment;
