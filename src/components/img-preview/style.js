import styled from "styled-components";

export const ImgPreviewWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #262626;
  z-index: 999;
  padding: 86px 0 60px 0;
  .close {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
  .main {
    .img-show {
      height: 70vh;
      position: relative;
      display: flex;
      justify-content: space-between;
      .control-btn {
        color: #fff;
        width: 80px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9;
        transition: opacity 0.3s;
        cursor: pointer;
      }
      .left-btn {
        left: 0;
      }
      .right-btn {
        right: 0;
      }
      img {
        height: 100%;
        object-fit: cover;
      }
    }
    //轮播节点样式
    .indicator {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .indicator-main {
        .tip {
          padding-left: 5px;
          color: #fff;
          line-height: 30px;
          margin-bottom: 5px;
        }
        .img-item {
          min-width: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          .img-box {
            width: 100px;
            height: 67px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 3px;
            position: relative;
            .item-cover {
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              position: absolute;
              left: 0;
              top: 0;
              opacity: 1;
              transition: opacity 0.3s;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .img-box:last-child {
            margin-right: 0;
          }
          .active {
            .item-cover {
              opacity: 0;
            }
          }
        }
      }
    }
  }
`