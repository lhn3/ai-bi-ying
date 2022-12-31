import styled from "styled-components";

export const EntireWrapper = styled.div`
  //头部80px
  padding-top: 80px;
  
  .entire-body{
    padding: 48px 20px 30px 20px;
    margin: 0 8px;
    position: relative;
    
    .entire-cover{
      width: 100%;
      height: 100%;
      z-index: 1;
      position: absolute;
      top:0;
      left: 0;
      background-color: rgba(0,0,0,0.3);
    }

    .entire-tip{
      display: flex;
      height: 100px;
      align-items: center;
      div{
        span{
          font-weight: bold;
        }
      }
    }
    .entire-title{
      color: #222222;
      font-size: 22px;
      font-weight: bold;
      padding-bottom: 20px;
    }
    .entire-box{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 -8px;
    }

    .pagination{
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .num-tip{
        line-height: 50px;
        color: ${props => props.theme.fontCurrentColor};
      }   
      .message{
        line-height: 60px;
        color: #717171;
      }

      .MuiPaginationItem-icon{
        font-size: 26px;
      }
      .MuiPagination-ul{
        li{
          margin: 0 8px;
        }
      }
      .MuiPaginationItem-page:hover{
        text-decoration: underline;
      }
      .Mui-selected {
        color: #fff;
        background-color: ${props => props.theme.fontCurrentColor};
      }
      .Mui-selected:hover{
        text-decoration: none;
        cursor: auto;
        background-color: ${props => props.theme.fontCurrentColor};
      }
    }
  }
`