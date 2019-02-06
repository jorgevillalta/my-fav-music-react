import { inject, observer } from 'mobx-react';
import * as React from 'react';

import AlbumList from '../blocks/AlbumList';
import AlbumView from '../components/AlbumView';

class AlbumGroup extends React.Component {
  render() {
    return (
      <AlbumList data-test="album-group-list">
        {this.props.albumStore.sortedAlbums.map((album) => (
          <AlbumView album={album} key={album.id} />
        ))}
      </AlbumList>
    );
  }
}

export default inject('albumStore')(observer(AlbumGroup));
