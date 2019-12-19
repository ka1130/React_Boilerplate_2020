import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe("App component", () => {
  it('foo', () => {
    const wrapper = shallow(<App title="Hello" />);
    expect(wrapper.length).toEqual(1);
    console.log(wrapper.debug());
    expect(1+1).toEqual(2);
  });
});