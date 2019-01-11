import * as React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AlbumBar = styled(({ name, ...props }) => (
  <AppBar position="fixed" color="primary" {...props}>
    <Toolbar>
      <Typography variant="h6" color="inherit">
        {name}
      </Typography>
    </Toolbar>
  </AppBar>
))`
  && {
    flex-grow: 1;
  }
}`;

export default AlbumBar;
