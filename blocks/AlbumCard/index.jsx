import styled from 'styled-components';
import Card from '@material-ui/core/Card';

import Details from './Details';
import Content from './Content';
import Title from './Title';
import Subtitle from './Subtitle';
import Actions from './Actions';
import Media from './Media';

const AlbumCard = styled(Card)`
  && {
    display: flex;
    min-width: 20%;
  }
`;

AlbumCard.Details = Details;
AlbumCard.Content = Content;
AlbumCard.Title = Title;
AlbumCard.Subtitle = Subtitle;
AlbumCard.Actions = Actions;
AlbumCard.Media = Media;

export default AlbumCard;
