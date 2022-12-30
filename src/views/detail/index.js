import {memo, useState} from 'react'
import {DetailWrapper} from "./style";
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import ImagePreview from "@/components/img-preview/img-preview";

const Detail = memo(() => {
  const [paramsObj] = useSearchParams()
  let params = Object.fromEntries(paramsObj)
  console.log(params.id)

  //展示图片预览
  const [dialog, setDialog] = useState()
  //图片预览的初始化index
  const [currentIndex,setCurrentIndex] = useState(0)

  const {clickItem} = useSelector(state => ({
    clickItem: state.entire.clickItem
  }))

  //点击图片
  const imgClick = ind => {
    setCurrentIndex(ind)
    setDialog(true)
  }

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
        dialog ? <ImagePreview currentIndex={currentIndex} imgList={clickItem.picture_urls || []} close={() => setDialog(false)} /> : null
      }
    </DetailWrapper>
  );
})

export default Detail;
