import styled from "styled-components";

export const ShowMoreWrapper = styled.div`
  .more {
    color: ${props => props.ifColor ? props.theme.currentColor : '#000'};
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;
    padding-top: 30px;
    width: max-content;
    .more-tip {
      margin-right: 6px;
    }
    &:hover {
      .more-tip {
        text-decoration: underline;
      }
    }
  }

`