import React from "react";
import "./donationCard.scss";

export const Card = (props) => {
  return (
    <section className="donation-card">
      <h2>{props.data.name}</h2>
      <h4>{props.data.donation}</h4>
    </section>
  );
};

export default donationCard;