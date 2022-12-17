
import styled from 'styled-components'

export const FooterWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-top: ${props => props.theme.borderPrimary};
  .footer-main{
    width: 1080px;
    height: 316px;
    margin: auto;
    .footer-top{
      padding: 50px 0 20px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: ${props => props.theme.borderPrimary};
      .footer-item{
        font-size: 14px;
        font-weight: bold;
        .item-title{
          margin-bottom: 18px;
          color: ${props => props.theme.fontPrimaryColor};
        }
        .item-info{
          line-height: 22px;
          color: #767676;
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
          span{
            display: inline-block;
            margin-left: 10px;
            height: 18px;
            width: 46px;
            border-radius: 4px;
            font-size: 12px;
            color: #fff;
            text-align: center;
            line-height: 18px;
            background-color: #006a70;
          }
        }
      }
    }
    .footer-bottom{
      position: relative;
      margin-top: 20px;
      display: flex;
      .svg{
        margin: 8px 8px 0 0;
      }
      .long-span{
        max-width: 740px;
        font-size: 14px;
        font-weight: bold;
        color: #767676;
        line-height: 20px;
        .link-span{
          &:hover{
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
      .icons{
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        width: 46px;
        display: flex;
        color: #767676;
        justify-content: space-between;
      }
    }
  }

`