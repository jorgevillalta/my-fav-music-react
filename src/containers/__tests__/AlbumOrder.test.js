import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import AlbumOrderModel from '../../models/AlbumOrderModel';
import AlbumStore from '../../stores/AlbumStore';
import AlbumOrder from '../AlbumOrder';

Enzyme.configure({ adapter: new Adapter() });

describe('AlbumOrder Container', () => {
  let wrapper;

  const albumStore = new AlbumStore();
  const spyHandleChangeOrder = jest.spyOn(
    AlbumOrder.wrappedComponent.prototype,
    'handleChangeOrder'
  );

  beforeEach(() => {
    spyHandleChangeOrder.mockClear(); // avoid spyOn wrong counts between tests
  });

  test('Renders ok', () => {
    wrapper = shallow(<AlbumOrder.wrappedComponent albumStore={albumStore} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Function call affects store', () => {
    wrapper = mount(<AlbumOrder.wrappedComponent albumStore={albumStore} />);

    wrapper.instance().handleChangeOrder(AlbumOrderModel.byName);

    expect(spyHandleChangeOrder).toBeCalledTimes(1);
    expect(albumStore.sortOrder).toBe(AlbumOrderModel.byName);
  });
});
