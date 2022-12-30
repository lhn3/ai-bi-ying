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
    .control-btn {
      top: 0;
      position: absolute;
      color: #fff;
      width: 50px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9;
      opacity: 0;
      transition: opacity 0.3s;
    }
    &:hover {
      .control-btn {
        opacity: 1;
      }
    }
    .left-btn {
      left: 0;
      background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.4), transparent);
    }
    .right-btn {
      right: 0;
      background-image: linear-gradient(-90deg, rgba(0, 0, 0, 0.4), transparent);
    }
    //轮播节点样式
    .indicator {
      position: absolute;
      height: 20px;
      width: 100%;
      z-index: 9;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .box-item{
        min-width: 14.3px;
        display: flex;
        align-items: center;
        justify-content: center;
        .box {
          min-width: 6px;
          min-height: 6px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 3px;
        }
        .box:last-child {
          margin-right: 0;
        }
        .active {
          min-width: 8px;
          min-height: 8px;
          border-radius: 4px;
          background-color: ${props => props.theme.primaryColor};
        }
        .dis-active{
          min-width: 4px;
          min-height: 4px;
          border-radius: 2px;
        }
      }
    }
  }
  .info-tip {
    font-weight: bold;
    font-size: 12px;
  }
  .info-title {
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.fontPrimaryColor};
  }
  .info-price {
    font-size: 14px;
    color: ${props => props.theme.fontPrimaryColor};
  }
  .info-star {
    display: flex;
    align-items: center;
    line-height: 14px;
    .ant-rate-star {
      margin-right: 2px;
    }
    .star-span {
      padding-left: 5px;
      font-size: 12px;
      color: ${props => props.theme.fontPrimaryColor};
    }
  }
`