import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';

import AlbumForm from '../AlbumForm';

import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

describe('AlbumForm Block', () => {
  let wrapper;
  const props = { name: 'input', size: 'small' };

  test('Renders ok', () => {
    wrapper = shallow(<AlbumForm />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Match snapshot', () => {
    wrapper = mount(<AlbumForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('TextInput render props', () => {
    wrapper = mount(<AlbumForm.TextInput {...props} />);
    expect(wrapper.prop('name')).toEqual(props.name);
  });

  test('ArtistInput render props', () => {
    wrapper = mount(<AlbumForm.ArtistInput {...props} />);
    expect(wrapper.prop('name')).toEqual(props.name);
  });

  test('AlbumInput render props', () => {
    wrapper = mount(<AlbumForm.AlbumInput {...props} />);
    expect(wrapper.prop('name')).toEqual(props.name);
  });

  test('AddButton render props', () => {
    wrapper = mount(<AlbumForm.AddButton {...props} />);
    expect(wrapper.prop('name')).toEqual(props.name);
  });
});
