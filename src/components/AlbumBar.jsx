import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledDiv = styled.div`
  && {
    flexGrow: 1
  }
}`;

function AlbumBar(props) {
  return (
    <StyledDiv>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            My Fav Albums
          </Typography>
        </Toolbar>
      </AppBar>
    </StyledDiv>
  );
}

export default AlbumBar;
