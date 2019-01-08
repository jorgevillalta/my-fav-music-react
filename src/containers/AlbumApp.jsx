import * as React from 'react';
import { Provider } from 'mobx-react';
import styled from 'styled-components';

import AlbumStore from '../stores/AlbumStore';
import AlbumBar from '../components/AlbumBar';
import AlbumCreator from '../components/AlbumCreator';
import AlbumOrder from '../components/AlbumOrder';
import AlbumGroup from '../components/AlbumGroup';

const StyledContentDiv = styled.div`
  && {
    margin-top: 64px; // Bar height
  }
`;

const albumStore = new AlbumStore();
/*albumStore.add(new AlbumModel('Radiohead', 'Ok Computer'));
albumStore.add(new AlbumModel('Muse', 'Absolution'));
albumStore.add(new AlbumModel('Pink Floyd', 'The dark side of the Moon'));*/

const stores = { albumStore: albumStore };

class AlbumApp extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <div>
          <AlbumBar />
          <StyledContentDiv>
            <AlbumCreator />
            <AlbumOrder />
            <AlbumGroup />
          </StyledContentDiv>
        </div>
      </Provider>
    );
  }
}

export default AlbumApp;
