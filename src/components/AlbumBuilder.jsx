import * as React from 'react';

import AlbumForm from '../blocks/AlbumForm';
import AlbumModel from '../models/AlbumModel';

class AlbumBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: '',
      name: ''
    };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTextInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(new AlbumModel(this.state.artist, this.state.name));
  }

  render() {
    return (
      <AlbumForm onSubmit={this.handleFormSubmit}>
        <AlbumForm.Content>
          <AlbumForm.ArtistInput
            value={this.state.artist}
            onChange={this.handleTextInputChange}
          />
          <AlbumForm.AlbumInput
            value={this.state.name}
            onChange={this.handleTextInputChange}
          />
          <AlbumForm.AddButton />
        </AlbumForm.Content>
      </AlbumForm>
    );
  }
}

export default AlbumBuilder;
