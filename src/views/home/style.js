import styled from 'styled-components'
import coverImg from '@/assets/img/cover.jpeg'

export const HomeWrapper = styled.div`
  //width: 100%;
  .home-top{
    height: 530px;
    background: url(${coverImg}) center/cover;
  }
  .home-body{
    box-sizing: border-box;
    margin: auto;
    //background: #00d8ff;
    border-left: 1px solid #a0d911;
    border-right: 1px solid #a0d911;
    width: 1080px;
    height: 1000px;
    
    .home-box{
      padding-top: 30px;
      .show-more{
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
      }
    }
  }

`