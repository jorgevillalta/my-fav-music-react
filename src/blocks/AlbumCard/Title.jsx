import * as React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

const Title = styled(({ ...props }) => (
  <Typography variant="h5" component="h5" {...props} />
))``;

export default Title;
