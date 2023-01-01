import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 24px;
  transition: all 0.3s;
  background: ${props => props.isTransparent ? 'transparent': '#ffffff'};
  position: ${props => props.isFixed ? 'fixed' : null};
  z-index: 99;
  
  //蒙版
  .se-cover{
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 98;
    background-color: rgba(0,0,0,0.5);
  }

  //动画
  //-----------------------------------------------------------------
  .mySwitch1-enter{
    opacity: 0;
    transform: translate(-50%, -100%) scale(0);
  }
  .mySwitch1-enter-active{
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
    transition: all 0.3s;
  }
  .mySwitch1-enter-done{
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
  .mySwitch1-exit{
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
  .mySwitch1-exit-active{
    opacity: 0;
    transform: translate(-50%, -100%) scale(0);
    transition: all 0.3s;
  }
  .mySwitch1-exit-done{
    opacity: 0;
    transform: translate(-50%, -100%) scale(0);
  }

  //------------------------------------------------------------------
  .mySwitch2-enter{
    opacity: 0;
    transform: translate(-50%, 100%) scale(2);
  }
  .mySwitch2-enter-active{
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
    transition: all 0.3s;
  }
  .mySwitch2-enter-done{
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
  .mySwitch2-exit{
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
  .mySwitch2-exit-active{
    opacity: 0;
    transform: translate(-50%, 100%) scale(2);
    transition: all 0.3s;
  }
  .mySwitch2-exit-done{
    opacity: 0;
    transform: translate(-50%, 100%) scale(2);
  }

`