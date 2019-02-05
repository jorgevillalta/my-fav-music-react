import * as React from 'react';

import AlbumForm from '../blocks/AlbumForm';
import AlbumModel from '../models/AlbumModel';

const initialState = {
  artist: '',
  name: ''
};

class AlbumBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTextInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(new AlbumModel(this.state.artist, this.state.name));
    this.setState(initialState);
  }

  render() {
    return (
      <AlbumForm
        onSubmit={this.handleFormSubmit}
        data-test="album-builder-form">
        <AlbumForm.Content>
          <AlbumForm.ArtistInput
            value={this.state.artist}
            onChange={this.handleTextInputChange}
            data-test="album-builder-artist-input"
          />
          <AlbumForm.AlbumInput
            value={this.state.name}
            onChange={this.handleTextInputChange}
            data-test="album-builder-album-input"
          />
          <AlbumForm.AddButton />
        </AlbumForm.Content>
      </AlbumForm>
    );
  }
}

export default AlbumBuilder;
