import styled from 'styled-components'

export const InfoItemWrapper = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  width: ${props => props.width};
  padding: 8px 8px 12px;
  line-height: 26px;
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    > img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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