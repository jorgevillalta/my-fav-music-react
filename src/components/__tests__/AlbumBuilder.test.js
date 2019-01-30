import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import AlbumForm from '../../blocks/AlbumForm';
import AlbumModel from '../../models/AlbumModel';
import AlbumBuilder from '../AlbumBuilder';

Enzyme.configure({ adapter: new Adapter() });

describe('AlbumBuilder Component', () => {
  let wrapper;

  const mockFn = jest.fn();
  const spyHandleTextInputChange = jest.spyOn(
    AlbumBuilder.prototype,
    'handleTextInputChange'
  );

  const albumOk = new AlbumModel('Radiohead', 'Ok Computer');

  beforeEach(() => {
    spyHandleTextInputChange.mockClear(); // avoid spyOn wrong counts between tests
  });

  test('Renders ok', () => {
    wrapper = shallow(<AlbumBuilder />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Find inputs and button', () => {
    wrapper = mount(<AlbumBuilder />);

    expect(wrapper.find(AlbumForm.ArtistInput).exists()).toBeTruthy();
    expect(wrapper.find(AlbumForm.AlbumInput).exists()).toBeTruthy();
    expect(wrapper.find(AlbumForm.AddButton).exists()).toBeTruthy();
  });

  test('Change events affect state', () => {
    wrapper = mount(<AlbumBuilder />);

    const artistInput = wrapper.find(AlbumForm.ArtistInput);
    const albumInput = wrapper.find(AlbumForm.AlbumInput);

    artistInput.props().onChange({
      target: { name: 'artist', value: albumOk.artist }
    });
    albumInput.props().onChange({
      target: { name: 'name', value: albumOk.name }
    });

    expect(spyHandleTextInputChange).toBeCalledTimes(2);
    expect(wrapper.state().artist).toBe(albumOk.artist);
    expect(wrapper.state().name).toBe(albumOk.name);
  });

  test('Change events affect state lift up', () => {
    wrapper = mount(<AlbumBuilder onSubmit={mockFn} />);

    const artistInput = wrapper.find(AlbumForm.ArtistInput);
    const albumInput = wrapper.find(AlbumForm.AlbumInput);

    artistInput.props().onChange({
      target: { name: 'artist', value: albumOk.artist }
    });
    albumInput.props().onChange({
      target: { name: 'name', value: albumOk.name }
    });

    wrapper.find(AlbumForm).simulate('submit');

    expect(mockFn).toBeCalledWith(
      expect.objectContaining({ artist: albumOk.artist, name: albumOk.name })
    );
  });
});
