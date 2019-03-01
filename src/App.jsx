import { createMuiTheme } from '@material-ui/core/styles';
import { Provider as StoreProvider } from 'mobx-react';
import * as React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import AlbumBar from './blocks/AlbumBar';
import AlbumCreator from './containers/AlbumCreator';
import AlbumGroup from './containers/AlbumGroup';
import AlbumOrder from './containers/AlbumOrder';
import AlbumStore from './stores/AlbumStore';

// https://material-ui.com/customization/themes
// https://www.styled-components.com/docs/advanced#theming
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

const StyledContentDiv = styled.div`
  && {
    margin-top: 64px; /* Bar height */
  }
`;

const stores = { albumStore: new AlbumStore() };

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StoreProvider {...stores}>
          <>
            <AlbumBar name="My Fav Albums" data-test="album-bar" />
            <StyledContentDiv>
              <AlbumCreator />
              <AlbumOrder />
              <AlbumGroup data-test="album-group" />
            </StyledContentDiv>
            <GlobalStyle />
          </>
        </StoreProvider>
      </ThemeProvider>
    );
  }
}

export default App;
