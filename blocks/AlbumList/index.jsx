import styled from 'styled-components';

const AlbumList = styled.div`
  && {
    display: flex;
    flex-wrap: wrap;
    padding: 24px;

    /* childs */
    & > * {
      margin: 12px;
    }
  }
`;

export default AlbumList;
