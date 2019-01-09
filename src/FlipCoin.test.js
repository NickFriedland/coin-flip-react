import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FlipCoin from './FlipCoin';

// smoke test
describe('<FlipCoin />', function() {
  it('renders without crashing', function() {
    shallow(<FlipCoin />);
  });

  //snapshot test
  it('matches snapshot', function() {
    const wrapper = shallow(<FlipCoin />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
  /* enzyme selector tests */

  // default state

  it('has a default state with numHeads: 0, numTails: 0, coinState: 0', function() {
    const wrapper = shallow(<FlipCoin />);
    // has default state of count: 0
    expect(wrapper.state().numHeads).toBe(0);
    expect(wrapper.state().numTails).toBe(0);
    expect(wrapper.state().coinState).toBe(0);
  });

  // test flip, find the id and simulate to click the button

  it('flip the coin', function() {
    /* the following is the same as above */
    const wrapper = shallow(<FlipCoin />);
    expect(wrapper.state().numHeads).toBe(0);
    expect(wrapper.state().numTails).toBe(0);
    expect(wrapper.state().coinState).toBe(0);

    const flip = wrapper.find('#flip');
    flip.simulate('click');

    expect(wrapper.state().numHeads + wrapper.state().numTails).toBe(1);
  });
});
