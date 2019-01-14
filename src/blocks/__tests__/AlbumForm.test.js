import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';

import AlbumForm from '../AlbumForm';

import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

describe('AlbumForm Block', () => {
  let wrapper;

  test('Renders ok', () => {
    wrapper = shallow(<AlbumForm />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Match snapshot', () => {
    wrapper = mount(<AlbumForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
