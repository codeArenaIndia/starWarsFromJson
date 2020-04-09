import React from 'react';
import {shallow } from 'enzyme';
import LoginHeader from './Login-Header';

it('renders App', () => {
    const wrapper = shallow(<LoginHeader />);
    expect(wrapper.exists()).toBe(true);
});