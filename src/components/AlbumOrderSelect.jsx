import * as React from 'react';

import OrderSelect from '../blocks/OrderSelect';
import AlbumOrderModel from '../models/AlbumOrderModel';

class AlbumOrderSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleOrderSelect = this.handleOrderSelect.bind(this);
  }

  handleOrderSelect(e) {
    this.props.onChangeOrder(e.target.value);
  }

  render() {
    return (
      <OrderSelect data-test="album-order-select">
        <OrderSelect.OrderInput
          value={this.props.order}
          onChange={this.handleOrderSelect}>
          <OrderSelect.SelectItem value={AlbumOrderModel.byDate}>
            By Date
          </OrderSelect.SelectItem>
          <OrderSelect.SelectItem value={AlbumOrderModel.byName}>
            By Album
          </OrderSelect.SelectItem>
          <OrderSelect.SelectItem value={AlbumOrderModel.byArtist}>
            By Artist
          </OrderSelect.SelectItem>
        </OrderSelect.OrderInput>
      </OrderSelect>
    );
  }
}

export default AlbumOrderSelect;
