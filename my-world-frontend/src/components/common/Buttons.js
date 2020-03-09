import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  backgroud: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
`;

// 자동 import 를 위해 Button 컴포넌트에 StyledButton 렌더링.
const Button = props => <StyledButton {...props} />;

export default Button;
