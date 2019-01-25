import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import AlbumCard from '../../blocks/AlbumCard';
import AlbumModel from '../../models/AlbumModel';
import AlbumView from '../AlbumView';

Enzyme.configure({ adapter: new Adapter() });

describe('AlbumView Component', () => {
  let wrapper;

  const albumEmpty = new AlbumModel('', '', '');
  const albumOne = new AlbumModel(
    'Metallica',
    '…And Justice for All',
    new Date('1988-08-25')
  );

  test('Renders ok', () => {
    wrapper = shallow(<AlbumView album={albumEmpty} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Find main style element', () => {
    wrapper = shallow(<AlbumView album={albumOne} />);
    expect(wrapper.find(AlbumCard).exists()).toBeTruthy();
  });

  test('Find album title', () => {
    wrapper = shallow(<AlbumView album={albumOne} />);
    expect(wrapper.find(AlbumCard.Title).text()).toBe(albumOne.name);
  });

  test('Find album artist', () => {
    wrapper = shallow(<AlbumView album={albumOne} />);
    expect(wrapper.find(AlbumCard.Subtitle).text()).toBe(albumOne.artist);
  });

  test('Find album date', () => {
    wrapper = shallow(<AlbumView album={albumOne} />);
    expect(wrapper.find('small').text()).toBe(
      albumOne.dateAdded.toLocaleString()
    );
  });
});
