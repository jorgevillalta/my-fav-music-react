import { inject, observer } from 'mobx-react';
import * as React from 'react';

import AlbumBuilder from '../components/AlbumBuilder';

class AlbumCreator extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(album) {
    this.props.albumStore.add(album);
  }

  render() {
    return <AlbumBuilder onSubmit={this.handleSubmit} />;
  }
}

export default inject('albumStore')(observer(AlbumCreator));
