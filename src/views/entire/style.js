import styled from "styled-components";

export const EntireWrapper = styled.div`
  position: relative;
  .entire-header{
    position: absolute;
    top: 0;
    width: 100%;
    height: 48px;
    border-bottom: ${props => props.theme.borderPrimary};
    display: flex;
    align-items: center;
    padding-left: 26px;
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
  }
  .entire-body{
    padding: 48px 20px 30px 20px;
    margin: 0 8px;

    .entire-tip{
      display: flex;
      height: 100px;
      align-items: center;
      div{
        span{
          font-weight: bold;
        }
      }
    }
    .entire-title{
      color: #222222;
      font-size: 22px;
      font-weight: bold;
      padding-bottom: 20px;
    }
    
  }
`