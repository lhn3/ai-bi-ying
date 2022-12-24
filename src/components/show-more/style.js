import styled from "styled-components";

export const ShowMoreWrapper = styled.div`
  color: ${props => props.ifColor ? props.theme.currentColor : '#000'};
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
  padding-top: 30px;
  .more-tip{
    margin-right: 6px;
    &:hover{
      text-decoration: underline;
    }
  }
`