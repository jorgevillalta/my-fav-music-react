import * as React from 'react';
import styled from 'styled-components';

import AlbumForm from '.';

const ArtistInput = styled(({ ...props }) => (
  <AlbumForm.TextInput label={'Artist 🎸'} name={'artist'} {...props} />
))`
  && {
    flex: 1 1 auto;
  }
`;

export default ArtistInput;
