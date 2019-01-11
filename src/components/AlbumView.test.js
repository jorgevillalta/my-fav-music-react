import * as React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import AlbumView from './AlbumView';
import AlbumCard from '../blocks/AlbumCard';
import AlbumModel from '../models/AlbumModel';

Enzyme.configure({ adapter: new Adapter() });

describe('Album Component', () => {
  let wrapper;

  const albumEmpty = new AlbumModel('', '');
  const albumOne = new AlbumModel('Metallica', 'One');

  test('Renders ok', () => {
    wrapper = shallow(<AlbumView album={albumEmpty} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Find main style element', () => {
    wrapper = shallow(<AlbumView album={albumOne} />);
    expect(wrapper.find(AlbumCard).exists()).toBeTruthy();
  });

  // Not work over codesanbox.io
  /*test('Match snapshot', () => {
    wrapper = mount(<AlbumView album={albumOne} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });*/
});
