import styled from 'styled-components';

const Content = styled.div`
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

export default Content;
