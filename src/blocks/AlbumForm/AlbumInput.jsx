import * as React from 'react';
import styled from 'styled-components';

import AlbumForm from '.';

const AlbumInput = styled(({ ...props }) => (
  <AlbumForm.TextInput label={'Album'} name={'name'} {...props} />
))``;

export default AlbumInput;
