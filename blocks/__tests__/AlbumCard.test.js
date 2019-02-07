import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';

import AlbumCard from '../AlbumCard';

import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

describe('AlbumCard Block', () => {
  let wrapper;
  const props = { test: 'a' };

  test('Renders ok', () => {
    wrapper = shallow(<AlbumCard />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Match snapshot', () => {
    wrapper = mount(<AlbumCard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('Actions render props', () => {
    wrapper = mount(<AlbumCard.Actions {...props} />);
    expect(wrapper.prop('test')).toEqual(props.test);
  });

  test('Title render props', () => {
    wrapper = mount(<AlbumCard.Title {...props} />);
    expect(wrapper.prop('test')).toEqual(props.test);
  });

  test('Subtitle render props', () => {
    wrapper = mount(<AlbumCard.Subtitle {...props} />);
    expect(wrapper.prop('test')).toEqual(props.test);
  });
});
