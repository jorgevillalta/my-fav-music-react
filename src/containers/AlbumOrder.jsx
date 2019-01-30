import { inject, observer } from 'mobx-react';
import * as React from 'react';

import AlbumOrderSelect from '../components/AlbumOrderSelect';

class AlbumOrder extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeOrder = this.handleChangeOrder.bind(this);
  }

  handleChangeOrder(order) {
    this.props.albumStore.sortOrder = order;
  }

  render() {
    const { sortOrder } = this.props.albumStore;

    return (
      <AlbumOrderSelect
        order={sortOrder}
        onChangeOrder={this.handleChangeOrder}
      />
    );
  }
}

export default inject('albumStore')(observer(AlbumOrder));
