import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('App', () => {
  let wrapper;

  beforeEach(() => {
   
   

    wrapper = shallow(<App
      
    />);
  });

  it('should match the snapshot ', () => {

    expect(wrapper).toMatchSnapshot();
  });
});
