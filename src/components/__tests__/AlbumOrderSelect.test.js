import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import OrderSelect from '../../blocks/OrderSelect';
import AlbumOrderModel from '../../models/AlbumOrderModel';
import AlbumOrderSelect from '../AlbumOrderSelect';

Enzyme.configure({ adapter: new Adapter() });

describe('AlbumOrderSelect Component', () => {
  let wrapper;

  const mockFn = jest.fn();
  const spyHandleOrderSelect = jest.spyOn(
    AlbumOrderSelect.prototype,
    'handleOrderSelect'
  );

  beforeEach(() => {
    spyHandleOrderSelect.mockClear(); // avoid spyOn wrong counts between tests
  });

  test('Renders ok', () => {
    wrapper = shallow(<AlbumOrderSelect />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Find input and selection items', () => {
    wrapper = mount(<AlbumOrderSelect />);

    expect(wrapper.find(OrderSelect.OrderInput).exists()).toBeTruthy();
    expect(
      wrapper.find(OrderSelect.OrderInput).contains(OrderSelect.SelectItem)
    ).toBeTruthy();
  });

  test('Render input props', () => {
    wrapper = mount(<AlbumOrderSelect order={AlbumOrderModel.byArtist} />);

    expect(wrapper.find(OrderSelect.OrderInput).props().value).toBe(
      AlbumOrderModel.byArtist
    );
  });

  test('Change events calls handle function', () => {
    wrapper = mount(<AlbumOrderSelect onChangeOrder={mockFn} />);

    const orderInput = wrapper.find(OrderSelect.OrderInput);

    orderInput.props().onChange({
      target: { value: AlbumOrderModel.byName }
    });

    expect(spyHandleOrderSelect).toBeCalledTimes(1);
  });

  test('Change events affect state lift up', () => {
    wrapper = mount(<AlbumOrderSelect onChangeOrder={mockFn} />);

    const orderInput = wrapper.find(OrderSelect.OrderInput);

    orderInput.props().onChange({
      target: { value: AlbumOrderModel.byName }
    });

    expect(mockFn).toBeCalledWith(AlbumOrderModel.byName);
  });
});
