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
    border-left: 1px solid #a0d911;
    border-right: 1px solid #a0d911;
    width: 1080px;
    
    .home-box{
      padding-top: 30px;
    }
  }

`