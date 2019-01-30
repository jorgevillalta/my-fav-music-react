import MenuItem from '@material-ui/core/MenuItem';
import * as React from 'react';
import styled from 'styled-components';

const SelectItem = styled(({ ...props }) => <MenuItem {...props} />)``;

export default SelectItem;
