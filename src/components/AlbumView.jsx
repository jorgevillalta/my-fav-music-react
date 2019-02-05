import { observer } from 'mobx-react';
import * as React from 'react';

import AlbumCard from '../blocks/AlbumCard';
import uknownAlbumImage from '../images/unknown-album.jpg';

class AlbumView extends React.Component {
  render() {
    const localeDate = this.props.album.dateAdded
      ? this.props.album.dateAdded.toLocaleString()
      : '';
    return (
      <AlbumCard>
        <AlbumCard.Details>
          <AlbumCard.Content>
            <AlbumCard.Title data-test="album-view-name">
              {this.props.album.name}
            </AlbumCard.Title>
            <AlbumCard.Subtitle data-test="album-view-artist">
              {this.props.album.artist}
            </AlbumCard.Subtitle>
            <small data-test="album-view-date">{localeDate}</small>
          </AlbumCard.Content>
          <AlbumCard.Actions>
            {/*<IconButton color="default">
              {this.props.showFavorite && <FavoriteIcon />}
            </IconButton>*/}
          </AlbumCard.Actions>
        </AlbumCard.Details>
        <AlbumCard.Media image={uknownAlbumImage} title="Album cover" />
      </AlbumCard>
    );
  }
}

export default observer(AlbumView);
