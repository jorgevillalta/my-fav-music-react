import * as React from 'react';
import styled from 'styled-components';

import CardActions from '@material-ui/core/CardActions';

const Actions = styled(({ ...props }) => (
  <CardActions disableActionSpacing={true} {...props} />
))``;

export default Actions;
