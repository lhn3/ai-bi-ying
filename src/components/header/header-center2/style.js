import styled from 'styled-components'

export const HeaderCenterWrapper2 = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  .main-info {
    width: 160px;
    display: flex;
    justify-content: space-between;
    div {
      cursor: pointer;
      color: ${props => props.isTransparent ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'};
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      font-weight: bold;
      //transition: border-bottom 0.3s;
    }
    .info-dis:hover {
      color: ${props => props.isTransparent ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'};
      border-bottom: 2px solid ${props => props.isTransparent ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'};
    }
    .info-active {
      border-bottom: 2px solid ${props => props.isTransparent ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'};
    }
  }
`