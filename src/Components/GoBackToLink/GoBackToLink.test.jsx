import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import GoBackLink from './GoBackToLink';

describe('GoBackToLink Component', () => {
  const goBackLink = { text: 'Text' };

  it('should render', () => {
    const wrapper = shallow(<GoBackLink goBackLink={goBackLink} />);
    expect(wrapper).toBeDefined();
  });

  it('should match supplied text', () => {
    const wrapper = shallow(<GoBackLink goBackLink={goBackLink} />);
    expect(wrapper.find('a.back-link').text()).toBe(goBackLink.text);
  });

  it('should handle a click event', () => {
    const history = sinon.spy(window.history, 'back');
    const wrapper = shallow(<GoBackLink goBackLink={goBackLink} />);
    wrapper.find('a.back-link').simulate('click');
    expect(history.calledOnce).toBe(true);
  });
});
