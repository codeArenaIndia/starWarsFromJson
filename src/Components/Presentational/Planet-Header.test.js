import React from 'react';
import {shallow } from 'enzyme';
import PlanetHeader from './Planet-Header';

it('renders App', () => {
    const wrapper = shallow(<PlanetHeader username="" />);
    expect(wrapper.exists()).toBe(true);
});