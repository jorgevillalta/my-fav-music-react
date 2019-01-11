import * as React from 'react';
import { observer } from 'mobx-react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import AlbumCard from '../blocks/AlbumCard';
import uknownAlbumImage from '../images/unknown-album.jpg';

class AlbumView extends React.Component {
  handleButton = event => {
    event.preventDefault();
  };

  render() {
    const localeDate = this.props.album.dateAdded
      ? this.props.album.dateAdded.toLocaleString()
      : '';
    return (
      <AlbumCard>
        <AlbumCard.Details>
          <AlbumCard.Content>
            <AlbumCard.Title>{this.props.album.name}</AlbumCard.Title>
            <AlbumCard.Subtitle>{this.props.album.artist}</AlbumCard.Subtitle>
            <small className="date">{localeDate}</small>
          </AlbumCard.Content>
          <AlbumCard.Actions>
            <IconButton color="default" onClick={this.handleButton}>
              {this.props.showFavorite && <FavoriteIcon />}
            </IconButton>
          </AlbumCard.Actions>
        </AlbumCard.Details>
        <AlbumCard.Media image={uknownAlbumImage} title="Album cover" />
      </AlbumCard>
    );
  }
}

export default observer(AlbumView);
