import React from "react";
import "./DisclamerPage.css";
import { Link } from "react-router-dom";
import cofee from "../../assets/cofee.png";
import samosa from "../../assets/samosa.png";
import dosa from "../../assets/dosa.png";
import noodles from "../../assets/noodles.png";
import { getAllFoodItems } from "../../redux/food/food.actions";
const Disclaimerpage = () => {
  return (
    <div>
        <div className="menu-card-div">
        <div className="menu-header">
          <h3>Our policy</h3>
          Our cafe policy involves outlining the rules and guidelines that govern the operation of the establishment to ensure the safety, well-being, and satisfaction of both customers and staff.The following are our cafe policy.
        </div>
        </div>
        <ul>
          <li>Customer services: We are committed to providing exceptional customer service.All staff members are expected to be polite, respectful, and attentive to customer needs.</li>
          <li>Menu and pricing: Our menu offers a variety of items, each clearly priced.Prices are subject to change, and any adjustments will be updated on our menu.</li>
          <li> Food Safety and Hygiene: We adhere to strict food safety and hygiene standards.Our staff is trained in proper food handling and cleanliness</li>
          <li>Refund and Return Policy:If you are unsatisfied with your order, please let us know, and we will do our best to resolve the issue.Refunds are provided at the discretion of [Cafe Name] management.</li>
        </ul>
    </div>
  );
};

export default Disclaimerpage;
