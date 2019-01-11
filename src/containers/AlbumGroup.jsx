import * as React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";

import AlbumView from "../components/AlbumView";
import AlbumList from "../blocks/AlbumList";

@inject("albumStore")
@observer
class AlbumGroup extends React.Component {
  render() {
    return (
      <AlbumList>
        {this.props.albumStore.sortedAlbums.map(album => (
          <AlbumView album={album} key={album.id} />
        ))}
      </AlbumList>
    );
  }
}

export default AlbumGroup;
