import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import AlbumList from '../../blocks/AlbumList';
import AlbumView from '../../components/AlbumView';
import AlbumModel from '../../models/AlbumModel';
import AlbumStore from '../../stores/AlbumStore';
import AlbumGroup from '../AlbumGroup';

Enzyme.configure({ adapter: new Adapter() });

describe('AlbumGroup Container', () => {
  let wrapper;

  const albumStore = new AlbumStore();
  const albumOk = new AlbumModel('Radiohead', 'Ok Computer');

  test('Renders ok', () => {
    wrapper = shallow(<AlbumGroup.wrappedComponent albumStore={albumStore} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Empty album store', () => {
    wrapper = mount(<AlbumGroup.wrappedComponent albumStore={albumStore} />);
    expect(wrapper.find(AlbumList).exists()).toBeTruthy();
    expect(wrapper.find(AlbumView).exists()).toBeFalsy();
  });

  test('None empty album store', () => {
    albumStore.add(albumOk);

    wrapper = mount(<AlbumGroup.wrappedComponent albumStore={albumStore} />);
    expect(wrapper.find(AlbumList).exists()).toBeTruthy();
    expect(wrapper.find(AlbumView).exists()).toBeTruthy();
  });
});
