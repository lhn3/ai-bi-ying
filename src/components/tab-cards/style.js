import styled from "styled-components";

export const TabCardsWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  width: 100%;
  padding: 16px 8px;
  margin: 0px -8px;
  .icon {
    position: absolute;
    height: 28px;
    width: 28px;
    background-color: #fff;
    box-shadow: 0 2px 2px #9e9e9e;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    transform: translateY(-50%);
  }
  .left-icon {
    left: -4px;
  }
  .right-icon {
    right: -4px;
  }
  .tabs {
    display: flex;
    .word-tab {
      flex-shrink: 0;
      flex-basis: 120px; //最小宽度
      cursor: pointer;
      height: 48px;
      line-height: 48px;
      text-align: center;
      padding: 0 16px;
      font-size: 17px;
      color: ${props => props.theme.fontPrimaryColor};
      font-weight: bold;
      border: solid 0.5px #D8D8D8;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
      margin-right: 16px;
      white-space: nowrap;
      transition: box-shadow 0.4s;
      &:hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, .15);
      }
    }
    .active-word-tab {
      color: #fff;
      background: #00848A;
      box-shadow: 0 7px 14px rgba(0, 132, 138, .15);
      border: solid 0.5px #00848A;
    }
  }
`