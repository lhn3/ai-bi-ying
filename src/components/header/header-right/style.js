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
    color: ${props => props.theme.fontPrimaryColor};
    .btn {
      padding: 15px;
      border-radius: 22px;
      &:hover {
        background-color: #f7f7f7;
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
      border: ${props => props.theme.borderPrimary};
      //样式混入
      ${props => props.theme.boxShadow} 
      ${props => props.avatarDialog ? 'box-shadow: 0 2px 4px #9e9e9e;' : ''} //弹窗出现时阴影一直保留
    }
  }
`