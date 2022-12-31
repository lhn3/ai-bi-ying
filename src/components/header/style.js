import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 80px;
  width: 100%;
  border-bottom: ${props => props.isTransparent ? 'none' : props.theme.borderPrimary};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 24px;
  transition: all 0.3s;
  background: ${props => props.isTransparent ? 'transparent': '#ffffff'};
  position: ${props => props.isFixed ? 'fixed' : null};
  z-index: 99;
`