import React from 'react';
import { connect } from "react-redux";
import './CardContainer.scss';
import { Card } from '../../Components/Card/Card';

export const CardContainer = (props) => {
  console.log('animals :', props);
  const cardsDisplay = props.animals ? (
    props.animals.map(animal => {
    return  <Card data={{ ...animal }} key={animal.id} />})) :
  (
    <h1>No Animals to Display</h1>
  )


  return (
    <div className="card-container">
      <section className="cards-display">
        {cardsDisplay}
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  animals: state.animals  
});

export default connect(mapStateToProps)(CardContainer);