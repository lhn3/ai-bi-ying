import styled from 'styled-components'

export const DetailWrapper = styled.div`
  height: 1000px;
  .imgs {
    height: 600px;
    display: flex;
    border: 0.5px solid #000c17;
    &:hover {
      //所有同类名的子元素
      & .img-cover {
        opacity: 1;
      }
    }
    //所有同类名的子元素
    .img-cover {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: opacity 0.5s;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }
    .img-left {
      height: 100%;
      width: 50%;
      border: 0.5px solid #000c17;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      &:hover {
        .img-cover {
          opacity: 0;
        }
        img {
          transform: scale(1.1);
        }
      }
    }
    .img-right {
      height: 100%;
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      .right-item {
        border: 0.5px solid #000c17;
        width: 50%;
        height: 50%;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        &:hover {
          .img-cover {
            opacity: 0;
          }
          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }
`
