import * as React from 'react';
import { inject, observer } from 'mobx-react';

import AlbumView from '../components/AlbumView';
import AlbumList from '../blocks/AlbumList';

class AlbumGroup extends React.Component {
  render() {
    return (
      <AlbumList>
        {this.props.albumStore.sortedAlbums.map(album => (
          <AlbumView album={album} key={album.id} />
        ))}
      </AlbumList>
    );
  }
}

export default inject('albumStore')(observer(AlbumGroup));
