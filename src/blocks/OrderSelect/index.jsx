import styled from 'styled-components';

import OrderInput from './OrderInput';
import SelectInput from './SelectInput';
import SelectItem from './SelectItem';

const OrderSelect = styled.form`
  && {
    display: flex;
    align-content: stretch;
    align-items: center;

    /* childs margin */
    & > * {
      margin: 12px;
    }
  }
`;

OrderSelect.SelectInput = SelectInput;
OrderSelect.OrderInput = OrderInput;
OrderSelect.SelectItem = SelectItem;

export default OrderSelect;
