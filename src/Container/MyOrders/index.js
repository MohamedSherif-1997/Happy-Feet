import React, { Component } from "react";
import PropTypes from "prop-types";

import MyOrders from "../../Components/myOrders";
import nike1 from "../../images/shoes/nike1.png";
import nike2 from "../../images/shoes/nike3.jpeg";
import puma1 from "../../images/shoes/puma1.jpeg";
import leeCooper1 from "../../images/shoes/leeCooper1.jpg";

class MyOrdersDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myOrders: [
        {
          name: "Nike React Element 87 Anthracite",
          image: nike1,
          price: 1200,
          brand: "Nike",
          discount: 50,
          color: "Black",
          seller: "Nike",
        },
        {
          name: "Tan Men Lee Cooper Shoes",
          image: leeCooper1,
          price: 1000,
          brand: "LeeCooper",
          discont: 50,
          color: "Brown",
          seller: "New look",
        },
        {
          name: "Puma mens-Blue/Black",
          image: puma1,
          price: 1500,
          brand: "Puma",
          discount: 50,
          color: "Blue",
          seller: "New look",
        },
        {
          name: "Nike VTR sneakers Red/Black",
          image: nike2,
          price: 550,
          brand: "Nike",
          discount: 40,
          color: "Red",
          seller: "Nike",
        },
      ],
    };
  }

  render() {
    const myOrders = this.state.myOrders;

    return (
      <div>
        <MyOrders myOrders={myOrders} history={this.props.history} />
      </div>
    );
  }
}

MyOrdersDashboard.propTypes = {
  history: PropTypes.object.isRequired,
};

export default MyOrdersDashboard;
