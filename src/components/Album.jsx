import * as React from 'react';
import { observer } from 'mobx-react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components';

import uknownAlbumImage from '../images/unknown-album.jpg';

const StyledCard = styled(Card)`
  && {
    display: flex;
    min-width: 20%;
  }
`;

const StyledDivDetails = styled.div`
  && {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
`;

const StyledCardContent = styled(CardContent)`
  && {
    flex: 1 0 auto;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  && {
    width: 151px;
  }
`;

@observer
class Album extends React.Component {
  handleButton = (event: MouseEvent) => {
    event.preventDefault();
  };

  render() {
    const localeDate = this.props.album.dateAdded
      ? this.props.album.dateAdded.toLocaleString()
      : '';
    return (
      <StyledCard>
        <StyledDivDetails>
          <StyledCardContent>
            <Typography variant="h5" component="h5">
              {this.props.album.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {this.props.album.artist}
            </Typography>
            <small>{localeDate}</small>
          </StyledCardContent>
          <CardActions disableActionSpacing={true}>
            <IconButton color="default" onClick={this.handleButton}>
              {this.props.showFavorite && <FavoriteIcon />}
            </IconButton>
          </CardActions>
        </StyledDivDetails>
        <StyledCardMedia image={uknownAlbumImage} title="Album cover" />
      </StyledCard>
    );
  }
}

export default Album;
