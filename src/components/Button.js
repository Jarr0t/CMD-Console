import React from 'react'
import styled, { css, keyframes } from 'styled-components';

const RotateAnimation = keyframes`
0% {
  transform: rotateZ(0deg);
}

100% {
  transform: rotateZ(360deg);
}
`

const StyledButton = styled.button.attrs(props => ({
  outlined: true,
}))`
border: none;
padding: 10px 15px;
cursor: pointer;
font-size: 18px;
&:focus {
  outline: none;
}

&:hover {
  animation: ${RotateAnimation} 1s 1 linear;
}

align-self: ${props => props.align || "stretch"};

${props => props.primary && css`
  color: ${props => props.color || props.theme.colors.primary};
  background: ${props => props.background || "white"};
`}

${props => props.outlined && css`
  color: ${props => props.color || props.theme.colors.primary};
  border: 1px solid ${props => props.color || props.theme.colors.primary};
  background: transparent;
`}
`

const LargeButton = styled(StyledButton)`
font-size: 32px;
`

const Button = (props) => {
  return (
    <StyledButton {...props} />
  )
}

export default Button;