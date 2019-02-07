import * as React from 'react';
import styled from 'styled-components';

import TextInput from './TextInput';

const AlbumInput = styled(({ ...props }) => (
  <TextInput label={'Album 💿'} name={'name'} {...props} />
))`
  && {
    flex: 1 1 auto;
  }
`;

export default AlbumInput;
