import styled from 'styled-components'

export const HeaderCenterSearchWrapper = styled.div`
  position: ${props => props.isFixed ? 'fixed' : 'absolute'};
  left: 0;
  top: 80px;
  height: ${props => props.isFocus ? '80px' : 0};
  width: 100%;
  transition: all 0.3s;
  background-color: ${props => props.isTransparent ? 'transparent' : '#fff'};
  display: flex;
  justify-content: center;
  z-index: 99;
  border-bottom: ${props => props.isTransparent ? 'none' : props.theme.borderPrimary};
  .se-main {
    display: flex;
    .se-box {
      background-color: #fff;
      width: 284px;
      height: 66px;
      border: ${props => props.theme.borderPrimary};
      .se-message {
        margin: 14px 0;
        padding: 0 24px;
        .se-title {
          font-size: 12px;
          font-weight: bold;
          color: #222222;
        }
        .se-tip {
          font-size: 12px;
          color: #717171;
        }
      }
      .se-border {
        border-left: ${props => props.theme.borderPrimary};
        border-right: ${props => props.theme.borderPrimary};
      }
    }
    .se-left {
      border-right: none;
      border-radius: 33px 0 0 33px;
    }
    .se-cen {
      border-left: none;
      border-right: none;
    }
    .se-right {
      border-left: none;
      border-radius: 0 33px 33px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .se-icon {
        margin-right: 8px;
        height: 48px;
        width: 48px;
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.primaryColor};
        color: #FFFFFF;
        font-size: 16px;
      }
    }
  }
  .mySwitch3-enter {
    opacity: 0;
    transform: translateY(-64px) scale(0.352, 0.727);
  }
  .mySwitch3-enter-active {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: all 0.3s;
  }
  .mySwitch3-enter-done {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  .mySwitch3-exit {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  .mySwitch3-exit-active {
    opacity: 0;
    transform: translateY(-64px) scale(0.352, 0.727);
    transition: all 0.3s;
  }
  .mySwitch3-exit-done {
    opacity: 0;
    transform: translateY(-64px) scale(0.352, 0.727);
  }

`