import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps } from './Card';

jest.mock('../../util/apiCalls.js');

describe('Card', () => {
  let wrapper, mockCard;

  beforeEach(() => {
    
    mockCard = [{
  
    }];
    
    wrapper = shallow(
      <Card 
     
    />) 

   
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});

 describe('mapStateToProps', () => {
  it('should return an object with card data', () => {

  });

});