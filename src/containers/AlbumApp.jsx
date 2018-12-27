import * as React from 'react';
import { Provider } from 'mobx-react';
import styled from 'styled-components';

import AlbumStore from '../stores/AlbumStore';
import AlbumModel from '../models/AlbumModel';
import AlbumBar from '../components/AlbumBar';
import AlbumForm from '../components/AlbumForm';
import AlbumOrder from '../components/AlbumOrder';
import AlbumList from '../components/AlbumList';

const StyledContentDiv = styled.div`
  && {
    margin-top: 64px; // Bar height
  }
`;

const albumStore = new AlbumStore();
albumStore.add(new AlbumModel('Radiohead', 'Ok Computer'));
albumStore.add(new AlbumModel('Muse', 'Absolution'));
albumStore.add(new AlbumModel('Pink Floyd', 'The dark side of the Moon'));

const stores = { albumStore: albumStore };

class AlbumApp extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <div>
          <AlbumBar />
          <StyledContentDiv>
            <AlbumForm />
            <AlbumOrder />
            <AlbumList />
          </StyledContentDiv>
        </div>
      </Provider>
    );
  }
}

export default AlbumApp;
