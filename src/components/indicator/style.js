import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  width: ${props => props.width};
  overflow: hidden;
  .indicator-box{
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    transition: all 0.5s;
  }
`