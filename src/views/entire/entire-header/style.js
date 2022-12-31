import styled from "styled-components";

export const EntireHeaderWrapper = styled.div`
  position: fixed;
  top: 80px;
  width: 100%;
  height: 48px;
  border-bottom: ${props => props.theme.borderPrimary};
  display: flex;
  align-items: center;
  padding-left: 26px;
  z-index: 99;
  background-color: #fff;
  .item{
    color: ${props=>props.theme.fontPrimaryColor};
    height: 32px;
    line-height: 32px;
    padding: 0 12px;
    border: ${props => props.theme.borderPrimary};
    border-radius: 4px;
    margin-right: 14px;
    cursor: pointer;
  }
  .active{
    color: #fff;
    background: ${props=>props.theme.currentColor};
    border: 1px solid rgb(0, 132, 137);
  }
`