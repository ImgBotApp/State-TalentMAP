import { shallow } from 'enzyme';
import React from 'react';
import toJSON from 'enzyme-to-json';
import sinon from 'sinon';
import BidListResultsCard from './BidListResultsCard';

describe('BidListResultsCardComponent', () => {
  const bid = { id: 1, position: { id: 2, position: { position_number: '05A', title: 'AO' } } };
  it('is defined', () => {
    const wrapper = shallow(
      <BidListResultsCard
        bid={bid}
        toggleBidPosition={() => {}}
        submitBid={() => {}}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('can receive props', () => {
    const wrapper = shallow(
      <BidListResultsCard
        bid={bid}
        toggleBidPosition={() => {}}
        submitBid={() => {}}
      />,
    );
    expect(wrapper.instance().props.bid.id).toBe(bid.id);
  });

  it('can call functions on button click', () => {
    const toggleBidSpy = sinon.spy();
    const submitBidSpy = sinon.spy();
    const wrapper = shallow(
      <BidListResultsCard
        bid={bid}
        toggleBidPosition={toggleBidSpy}
        submitBid={submitBidSpy}
      />,
    );
    // submitting is the first button
    wrapper.find('button').at(0).simulate('click');
    sinon.assert.calledOnce(submitBidSpy);
    // deleting is the second button
    wrapper.find('button').at(1).simulate('click');
    sinon.assert.calledOnce(toggleBidSpy);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <BidListResultsCard
        bid={bid}
        toggleBidPosition={() => {}}
        submitBid={() => {}}
      />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
