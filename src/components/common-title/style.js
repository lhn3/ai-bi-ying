import styled from 'styled-components'

export const CommonTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 1px;
  width: max-content;
  .title {
    cursor: ${(props) => (props.showMore ? 'pointer' : 'unset')};
    padding: 0 20px 0 0;
    .title1 {
      font-size: 22px;
      font-weight: bold;
    }
    .title2 {
      font-size: 16px;
      padding: 15px 0 30px 0;
    }
  }
  .icon {
    cursor: ${(props) => (props.showMore ? 'pointer' : 'unset')};
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover {
    .icon {
      opacity: 1;
    }
  }
`
