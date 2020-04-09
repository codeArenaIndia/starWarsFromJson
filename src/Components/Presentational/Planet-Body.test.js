import React from 'react';
import {shallow } from 'enzyme';
import PlanetBody from './Planet-Body';

it('renders App', () => {
    const wrapper = shallow(<PlanetBody planets={[]}/>);
    const loaded = wrapper.find('.planet-list');
    expect(loaded.exists()).toBe(true);
});