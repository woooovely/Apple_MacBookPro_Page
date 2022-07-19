import React from 'react';
import styled from 'styled-components';

const Notice = styled.h2`
  text-align: center;
`;

function DeletedPage () {
    return (
        <>
          <Notice>삭제되거나 수정된 페이지입니다.</Notice>
        </>
    )
}

export default DeletedPage;