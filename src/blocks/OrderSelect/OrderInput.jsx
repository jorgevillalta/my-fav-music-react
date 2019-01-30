import * as React from 'react';
import styled from 'styled-components';

import SelectInput from './SelectInput';

const OrderInput = styled(({ value, ...props }) => (
  <SelectInput
    label={'Order 🔝'}
    htmlFor={'order'}
    value={value || ''}
    inputProps={{
      name: 'order',
      id: 'select-order'
    }}
    {...props}
  />
))``;

export default OrderInput;
