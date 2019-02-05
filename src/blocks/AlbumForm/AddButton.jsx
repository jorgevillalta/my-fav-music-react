import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import * as React from 'react';
import styled from 'styled-components';

const AddButton = styled(({ ...props }) => (
  <Fab color="primary" aria-label="Add" type="submit" {...props}>
    <AddIcon />
  </Fab>
))`
  && {
    max-width: 40px;
    max-height: 40px;
  }
`;

export default AddButton;
