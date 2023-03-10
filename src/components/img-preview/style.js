import styled from 'styled-components'

export const ImgPreviewWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #262626;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  .close {
    height: 86px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
  }
  .img-show {
    flex: 1;
    min-height: 480px;
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
    //动画
    .mySwitch-enter {
      opacity: 0;
      transform: translateX(
        ${(props) => (props.position === 'next' ? '100px' : '-100px')}
      );
    }
    .mySwitch-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: all 0.2s;
    }
    .mySwitch-enter-done {
      opacity: 1;
      transform: translateX(0);
    }
    .mySwitch-exit {
      opacity: 1;
    }
    .mySwitch-exit-active {
      opacity: 0;
      transition: all 0.2s;
    }
    .mySwitch-exit-done {
      opacity: 0;
    }
    img {
      max-width: calc(100% - 200px);
      height: 100%;
      object-fit: cover;
    }
  }
  //轮播节点样式
  .indicator {
    height: 105px;
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    .indicator-main {
      .tip {
        padding-left: 5px;
        color: #fff;
        line-height: 30px;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;
        .tip-control {
          cursor: pointer;
        }
      }
      .img-item {
        min-width: 110px;
        height: ${(props) => (props.showList ? '67px' : 0)};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: height 0.3s;
        .img-box {
          width: 100px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 3px;
          position: relative;
          cursor: pointer;
          .item-cover {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
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
`
