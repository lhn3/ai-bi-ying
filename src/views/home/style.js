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
    background: #00d8ff;
    width: 1080px;
    height: 1000px;
    
    .home-box{
      padding-top: 30px;
      .list{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      .show-more{
        cursor: pointer;
        font-size: 17px;
        font-weight: bold;
        padding-top: 30px;
      }
    }
  }

`