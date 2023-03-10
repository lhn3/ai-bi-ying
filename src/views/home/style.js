import styled from 'styled-components'
import coverImg from '@/assets/img/cover.jpeg'

export const HomeWrapper = styled.div`
  .home-top {
    height: 530px;
    background: url(${coverImg}) center/cover;
  }
  .home-body {
    box-sizing: border-box;
    margin: auto;
    width: 1080px;
    padding-bottom: 40px;
    .home-box {
      padding-top: 30px;
    }
  }
`
