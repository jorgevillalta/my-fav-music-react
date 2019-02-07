import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';

import AlbumList from '../AlbumList';

import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

describe('AlbumList Block', () => {
  let wrapper;

  test('Renders ok', () => {
    wrapper = shallow(<AlbumList />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Match snapshot', () => {
    wrapper = mount(<AlbumList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
