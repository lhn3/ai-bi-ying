import {memo, useState,useEffect} from 'react'
import {DetailWrapper} from "./style";
import {useSearchParams} from "react-router-dom";
import {shallowEqual, useSelector,useDispatch} from "react-redux";
import ImgPreview from "@/components/img-preview/img-preview";
import mainSlice from "@/store/main-slice";

const Detail = memo(() => {
  const dispatch = useDispatch()
  const [paramsObj] = useSearchParams()
  let params = Object.fromEntries(paramsObj)
  console.log(params.id)

  //展示图片预览
  const [dialog, setDialog] = useState()
  //图片预览的初始化index
  const [currentIndex, setCurrentIndex] = useState(0)

  const {clickItem} = useSelector(state => ({
    clickItem: state.entire.clickItem
  }), shallowEqual)

  //点击图片
  const imgClick = ind => {
    setCurrentIndex(ind)
    setDialog(true)
  }

  //页面滚动函数
  let scrollFunc = () => dispatch(mainSlice.actions.headerChange({isFixed: false, isTransparent: false, isFocus: false}))

  useEffect(()=>{
    //头部初始化
    scrollFunc()
    //页面滚动实时改变头部状态
    document.addEventListener('scroll',scrollFunc)

    //移除监听
    return () => document.removeEventListener('scroll',scrollFunc)
  },[])

  return (
    <DetailWrapper>
      {
        clickItem.picture_urls ?
          <div className='imgs'>
            <div className='img-left' onClick={() => imgClick(0)}>
              <div className='img-cover'/>
              <img src={clickItem.picture_urls?.[0]}/>
            </div>
            <div className='img-right'>
              {
                clickItem.picture_urls?.slice(1, 5).map((item, ind) => {
                  return (
                    <div className='right-item' key={item} onClick={() => imgClick(ind + 1)}>
                      <div className='img-cover'/>
                      <img src={item}/>
                    </div>
                  )
                })
              }
            </div>
          </div>
          : null
      }

      {
        dialog ? <ImgPreview currentIndex={currentIndex} imgList={clickItem.picture_urls || []}
                             close={() => setDialog(false)}/> : null
      }
    </DetailWrapper>
  );
})

export default Detail;
