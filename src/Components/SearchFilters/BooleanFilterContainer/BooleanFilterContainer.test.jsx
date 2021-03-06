import { mount, shallow } from 'enzyme';
import React from 'react';
import toJSON from 'enzyme-to-json';
import sinon from 'sinon';
import BooleanFilterContainer from './BooleanFilterContainer';

describe('BooleanFilterContainerComponent', () => {
  const items = [{
    item: { title: 'title', selectionRef: 'ref' },
    data: [{ isSelected: true }],
  }];

  it('can receive props', () => {
    const wrapper = shallow(
      <BooleanFilterContainer
        onBooleanFilterClick={() => {}}
        filters={items}
      />,
    );
    expect(wrapper.instance().props.filters[0].item.title).toBe(items[0].item.title);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <BooleanFilterContainer
        onBooleanFilterClick={() => {}}
        filters={items}
      />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('can handle click events', () => {
    const onClick = sinon.spy();
    const wrapper = mount(
      <BooleanFilterContainer
        onBooleanFilterClick={onClick}
        filters={items}
      />,
    );
    wrapper.find('input').simulate('change', { target: { checked: true } });
    expect(onClick.calledOnce).toBe(true);
  });
});
