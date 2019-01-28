import { FormControl, InputLabel, Select } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

const SelectInput = styled(({ label, htmlFor, ...props }) => (
  <FormControl>
    <InputLabel htmlFor={htmlFor}>{label}</InputLabel>
    <Select {...props} />
  </FormControl>
))``;

export default SelectInput;
