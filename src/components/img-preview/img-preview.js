import {memo, useState,useEffect} from 'react'
import PropTypes from "prop-types"
import { ImgPreviewWrapper} from "./style";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/components/indicator/indicator";
import classNames from "classnames";

const ImagePreview = memo((props) => {
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    setIndex(props.currentIndex)
  },[props.currentIndex])

  //点击上一个下一个
  const handelClick = val => {
    let newIndex = val === 'next' ? index + 1 : index - 1
    if (newIndex < 0) newIndex = props.imgList?.length - 1
    if (newIndex > props.imgList?.length - 1) newIndex = 0
    setIndex(newIndex)
  }
  return (
    <ImgPreviewWrapper>
      {/*关闭按钮*/}
      <div className='close' onClick={() => props.close()}><IconClose/></div>

      <div className='main'>
        <div className='img-show'>
          {/*左右控件*/}
          <div className='control-btn left-btn' onClick={() => handelClick('pre')}>
            <IconArrowLeft width='77' height='77'/>
          </div>
          <img src={props.imgList?.[index]}/>
          <div className='control-btn right-btn' onClick={() => handelClick('next')}>
            <IconArrowRight width='77' height='77'/>
          </div>
        </div>

        {/*轮播图片*/}
        <div className='indicator'>
          <div className='indicator-main'>
            <div className='tip'>{`${index + 1}/${props.imgList?.length}`}</div>
            <Indicator index={index} length={props.imgList?.length} width='80vw'>
              {
                props.imgList?.map((item, ind) => {
                  return (
                    <div className='img-item' key={item}>
                      <div className={classNames('img-box', {active: index === ind})}>
                        <div className='item-cover'/>
                        <img src={item}/>
                      </div>
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </ImgPreviewWrapper>
  );
})

ImagePreview.propsType={
  imgList: PropTypes.array,
  currentIndex: PropTypes.number
}
ImagePreview.defaultProps={
  imgList: [],
  currentIndex: 0
}

export default ImagePreview;
