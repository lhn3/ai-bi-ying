import styled from "styled-components";

export const TabCardsWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 0 8px;
  margin: 0px -8px;
  .icon {
    cursor: pointer;
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
    z-index: 90;
  }
  .left-icon {
    left: -4px;
  }
  .right-icon {
    right: -4px;
  }
  .tabs {
    padding: 16px 0;
    overflow-x: hidden;
    .tab-scroll {
      display: flex;
      white-space: nowrap;
      transition: all 0.4s;
      
      
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
      
      
      .photo-tab {
        flex-shrink: 0;
        width: 20%;
        cursor: pointer;
        .inner {
          position: relative;
          padding: 0 8px;
          img {
            width: 100%;
            border-radius: 4px;
          }
          .bg-cover {
            position: absolute;
            left: 8px;
            right: 8px;
            bottom: 0;
            height: 60%;
            border-radius: 4px;
            background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
          }
          .photo-info {
            position: absolute;
            left: 8px;
            right: 8px;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 24px 32px;
            color: #fff;
            font-weight: bold;
            .photo-title {
              font-size: 18px;
            }
            .photo-price {
              font-size: 14px;
            }
          }
        }
      }
      
      
      .item-tab{
        flex-shrink: 0;
        width: 20%;
      }
    }
  }
`