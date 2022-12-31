import styled from 'styled-components'

export const HeaderRightWrapper = styled.div`
  position: relative;
  .header-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    .btn {
      color: ${props => props.isTransparent ? '#fff' : props.theme.fontPrimaryColor};
      padding: 15px;
      border-radius: 22px;
      &:hover {
        background-color: ${props => props.isTransparent ? 'rgba(255,255,255,0.2)' : '#f7f7f7'};
      }
    }
    .avatar-box {
      margin-left: 6px;
      padding: 0 3px 0 10px;
      justify-content: space-between;
      align-items: center;
      display: flex;
      height: 40px;
      width: 64px;
      border-radius: 20px;
      color: ${props => props.theme.fontPrimaryColor};
      background-color: #ffffff;
      border: ${props => props.theme.borderPrimary};
      //样式混入
      ${props => props.theme.boxShadow}
      ${props => props.avatarDialog ? 'box-shadow: 0 2px 4px #9e9e9e;' : ''} //弹窗出现时阴影一直保留
    }
  }
`