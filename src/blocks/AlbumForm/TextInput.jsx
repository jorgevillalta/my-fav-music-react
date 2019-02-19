import { FormControl, TextField } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

const TextInput = styled(({ ...props }) => (
  <FormControl>
    <TextField margin="normal" {...props} />
  </FormControl>
))`
  && {
    flex: 1 1 auto;
  }
`;

export default TextInput;
