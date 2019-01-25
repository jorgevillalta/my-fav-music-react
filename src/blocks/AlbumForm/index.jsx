import styled from 'styled-components';

import AddButton from './AddButton';
import AlbumInput from './AlbumInput';
import ArtistInput from './ArtistInput';
import Content from './Content';
import TextInput from './TextInput';

const AlbumForm = styled.form``;

AlbumForm.Content = Content;
AlbumForm.TextInput = TextInput;
AlbumForm.ArtistInput = ArtistInput;
AlbumForm.AlbumInput = AlbumInput;
AlbumForm.AddButton = AddButton;

export default AlbumForm;
