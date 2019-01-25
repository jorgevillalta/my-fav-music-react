import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import * as React from 'react';
import styled from 'styled-components';

const AddButton = styled(({ size, ...props }) => (
  <Fab
    color="primary"
    aria-label="Add"
    type="submit"
    size={size ? size : 'small'}
    {...props}>
    <AddIcon />
  </Fab>
))``;

export default AddButton;
