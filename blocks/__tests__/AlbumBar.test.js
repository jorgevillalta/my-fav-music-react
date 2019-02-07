import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';

import AlbumBar from '../AlbumBar';

import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

describe('AlbumBar Block', () => {
  let wrapper;

  test('Renders ok', () => {
    wrapper = shallow(<AlbumBar />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Match snapshot', () => {
    wrapper = mount(<AlbumBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
