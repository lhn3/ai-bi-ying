import styled from 'styled-components'

export const HeaderCenterWrapper = styled.div`
  margin: auto;
  box-sizing: border-box;
  width: 300px;
  height: 48px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  border: ${props => props.theme.borderPrimary};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px 0 24px;
  ${props => props.theme.boxShadow}
  .search-title{
    font-size: 14px;
    font-weight: bold;
    color: ${props=>props.theme.fontPrimaryColor};
  }
  .search-icon{
    height: 32px;
    width: 32px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.theme.primaryColor};
    color: #FFFFFF;
  }
`