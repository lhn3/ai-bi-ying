import styled from "styled-components";

export const ShowMoreWrapper = styled.div`
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