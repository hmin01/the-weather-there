import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  position: relative;
  width: 100vw;
`;

const Layout: React.FC<any> = ({ children }): JSX.Element => {
  return (
    <StyledLayout>{children}</StyledLayout>
  );
}

export default Layout;