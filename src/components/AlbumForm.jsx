import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { FormControl, TextField, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';

import AlbumModel from '../models/AlbumModel';

const StyledDiv = styled.div`
  && {
    display: flex;
    align-content: stretch;
    align-items: center;

    /* childs margin */
    & > * {
      margin: 12px;
    }
  }
`;

@inject('albumStore')
@observer
class TodoForm extends React.Component {
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
      <form onSubmit={this.handleFormSubmit}>
        <StyledDiv>
          <FormControl>
            <TextField
              label="Artist"
              name="artist"
              value={this.state.artist}
              onChange={this.handleInputChange}
              margin="normal"
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Album"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              margin="normal"
            />
          </FormControl>
          <Fab color="primary" size="small" aria-label="Add" type="submit">
            <AddIcon />
          </Fab>
        </StyledDiv>
      </form>
    );
  }
}

export default TodoForm;
