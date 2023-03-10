import styled from 'styled-components'

export const HeaderLeftWrapper = styled.div`
  width: 232px;
  cursor: pointer;
  color: ${(props) =>
    props.isTransparent ? '#ffffff' : props.theme.primaryColor};
`
