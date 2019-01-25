import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';

import AlbumOrderModel from '../models/AlbumOrderModel';

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

class AlbumOrder extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    this.props.albumStore.sortOrder = e.target.value;
  }

  render() {
    const { sortOrder } = this.props.albumStore;

    return (
      <StyledDiv>
        <FormControl>
          <InputLabel htmlFor="order">Order</InputLabel>
          <Select
            value={sortOrder}
            onChange={this.handleSelect}
            inputProps={{
              name: 'order',
              id: 'select-order'
            }}>
            <MenuItem value={AlbumOrderModel.byDate}>By Date</MenuItem>
            <MenuItem value={AlbumOrderModel.byName}>By Album</MenuItem>
            <MenuItem value={AlbumOrderModel.byArtist}>By Artist</MenuItem>
          </Select>
        </FormControl>
      </StyledDiv>
    );
  }
}

export default inject('albumStore')(observer(AlbumOrder));
