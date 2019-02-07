import * as React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

const Subtitle = styled(({ ...props }) => (
  <Typography variant="subtitle1" color="textSecondary" {...props} />
))``;

export default Subtitle;
