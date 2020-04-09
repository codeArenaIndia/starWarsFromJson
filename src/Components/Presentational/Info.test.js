import React from 'react';
import {shallow } from 'enzyme';
import Info from './Info';

it('renders App', () => {
    const wrapper = shallow(<Info modalData={{}} />);
    expect(wrapper.exists()).toBe(true);
});