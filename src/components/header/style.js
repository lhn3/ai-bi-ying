import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 80px;
  width: 100%;
  border-bottom:${props => props.theme.borderPrimary};
  //box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  display: flex;  
  align-items: center;
  box-sizing: border-box;
  padding: 0 24px;
`