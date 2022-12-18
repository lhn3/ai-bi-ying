import styled from 'styled-components'

export const InfoItemWrapper = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  width: ${props => props.width};
  height: 300px;
  padding: 8px 8px 12px;
  line-height: 26px;
  .info-img{
    width: 100%;
    height: 164px;
    border-radius: 4px;
  }
  .info-tip{
    font-weight: bold;
    font-size: 12px;
  }
  .info-title{
    font-size: 16px;
    font-weight: bold;
    color: ${props=>props.theme.fontPrimaryColor};
  }
  .info-price{
    font-size: 14px;
    color: ${props=>props.theme.fontPrimaryColor};
  }
  .info-star{
    display: flex;
    align-items: center;
    line-height: 14px;
    .ant-rate-star{
      margin-right: 2px;
    }
    .star-span{
      padding-left: 5px;
      font-size: 12px;
      color: ${props=>props.theme.fontPrimaryColor};
    }
  }
`