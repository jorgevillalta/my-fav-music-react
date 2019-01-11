import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { TextField, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import AlbumModel from '../models/AlbumModel';
import AlbumForm from '../blocks/AlbumForm';

class AlbumCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: '',
      name: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.albumStore.add(
      new AlbumModel(this.state.artist, this.state.name)
    );
  };

  render() {
    return (
      <AlbumForm onSubmit={this.handleFormSubmit}>
        <AlbumForm.Content>
          <AlbumForm.Control>
            <TextField
              label="Artist"
              name="artist"
              value={this.state.artist}
              onChange={this.handleInputChange}
              margin="normal"
            />
          </AlbumForm.Control>
          <AlbumForm.Control>
            <TextField
              label="Album"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              margin="normal"
            />
          </AlbumForm.Control>
          <Fab color="primary" size="small" aria-label="Add" type="submit">
            <AddIcon />
          </Fab>
        </AlbumForm.Content>
      </AlbumForm>
    );
  }
}

export default inject('albumStore')(observer(AlbumCreator));
