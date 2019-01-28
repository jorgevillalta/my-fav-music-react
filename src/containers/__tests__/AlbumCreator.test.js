import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import AlbumModel from '../../models/AlbumModel';
import AlbumStore from '../../stores/AlbumStore';
import AlbumCreator from '../AlbumCreator';

Enzyme.configure({ adapter: new Adapter() });

describe('AlbumCreator Container', () => {
  let wrapper;

  const albumStore = new AlbumStore();
  const spyHandleSubmit = jest.spyOn(
    AlbumCreator.wrappedComponent.prototype,
    'handleSubmit'
  );
  const albumOk = new AlbumModel('Radiohead', 'Ok Computer');

  beforeEach(() => {
    spyHandleSubmit.mockClear(); // avoid spyOn wrong counts between tests
  });

  test('Renders ok', () => {
    wrapper = shallow(
      <AlbumCreator.wrappedComponent albumStore={albumStore} />
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Function call affects store', () => {
    wrapper = mount(<AlbumCreator.wrappedComponent albumStore={albumStore} />);

    wrapper.instance().handleSubmit(albumOk);

    expect(spyHandleSubmit).toBeCalledTimes(1);
    expect(albumStore.albums).toHaveLength(1);
  });
});
