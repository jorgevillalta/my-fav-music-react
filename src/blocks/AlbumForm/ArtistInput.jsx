import * as React from 'react';
import styled from 'styled-components';

import TextInput from './TextInput';

const ArtistInput = styled(({ ...props }) => (
  <TextInput label={'Artist 🎸'} name={'artist'} {...props} />
))``;

export default ArtistInput;
