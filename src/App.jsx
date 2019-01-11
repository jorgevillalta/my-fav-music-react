import * as React from "react";
import { Provider as StoreProvider } from "mobx-react";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

import AlbumStore from "./stores/AlbumStore";
import AlbumBar from "./blocks/AlbumBar";
import AlbumCreator from "./containers/AlbumCreator";
import AlbumOrder from "./containers/AlbumOrder";
import AlbumGroup from "./containers/AlbumGroup";

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
    margin-top: 64px; // Bar height
  }
`;

/*const albumStore = new AlbumStore();
albumStore.add(new AlbumModel('Radiohead', 'Ok Computer'));
albumStore.add(new AlbumModel('Muse', 'Absolution'));
albumStore.add(new AlbumModel('Pink Floyd', 'The dark side of the Moon'));*/
const stores = { albumStore: new AlbumStore() };

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StoreProvider {...stores}>
          <div>
            <AlbumBar name="My Fav Albums" />
            <StyledContentDiv>
              <AlbumCreator />
              <AlbumOrder />
              <AlbumGroup />
            </StyledContentDiv>
            <GlobalStyle />
          </div>
        </StoreProvider>
      </ThemeProvider>
    );
  }
}

export default App;
