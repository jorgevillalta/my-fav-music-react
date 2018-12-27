import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import Album from './Album';

const StyledDivContainer = styled.div`
  && {
    display: flex;
    flex-wrap: wrap;
    padding: 24px;

    /* childs */
    & > * {
      margin: 12px;
    }
  }
`;

@inject('albumStore')
@observer
class AlbumList extends React.Component {
  render() {
    return (
      <StyledDivContainer>
        {this.props.albumStore.sortedAlbums.map((album) => (
          <Album album={album} key={album.id} />
        ))}
      </StyledDivContainer>
    );
  }
}

export default AlbumList;
