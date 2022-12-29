import styled from 'styled-components'

export const AvatarDialogWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 55px;
  width: 240px;
  height: 250px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 1px 15px -5px #9e9e9e;
  font-size: 14px;
  text-indent: 1em;
  line-height: 42px;
  z-index: 999;
  .top {
    padding: 10px 0;
    border-bottom: ${props => props.theme.borderPrimary};
    div:hover {
      cursor: pointer;
      background: #f4f4f4;
    }
  }
  .bottom {
    padding: 10px 0;
    div:hover {
      cursor: pointer;
      background: #f4f4f4;
    }
  }

`