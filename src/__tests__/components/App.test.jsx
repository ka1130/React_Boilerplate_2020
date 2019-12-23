import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';

describe('App component', () => {
  it('has correct title', () => {
    const wrapper = shallow(<App title="Hello" />);
    expect(wrapper.find('h2').text()).toEqual('Hello');
  });
});
