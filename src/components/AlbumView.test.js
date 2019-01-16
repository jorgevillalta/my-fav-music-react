import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import AlbumCard from '../blocks/AlbumCard';
import AlbumModel from '../models/AlbumModel';
import AlbumView from './AlbumView';

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
});
