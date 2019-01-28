import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';

import OrderSelect from '../OrderSelect';

import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

describe('OrderSelect Block', () => {
  let wrapper;
  const label = 'Order';
  const htmlFor = 'order';
  const props = { size: 'small', value: 'order' };

  test('Renders ok', () => {
    wrapper = shallow(<OrderSelect {...props} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Match snapshot', () => {
    wrapper = mount(<OrderSelect {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('SelectInput render props', () => {
    wrapper = mount(
      <OrderSelect.SelectInput label={label} htmlFor={htmlFor} {...props} />
    );
    expect(wrapper.prop('label')).toEqual(label);
    expect(wrapper.prop('htmlFor')).toEqual(htmlFor);
    expect(wrapper.prop('size')).toEqual(props.size);
  });

  test('OrderInput render props', () => {
    wrapper = mount(<OrderSelect.OrderInput {...props} />);
    expect(wrapper.prop('size')).toEqual(props.size);
  });

  test('SelectItem render props', () => {
    wrapper = mount(<OrderSelect.SelectItem {...props} />);
    expect(wrapper.prop('size')).toEqual(props.size);
  });
});
