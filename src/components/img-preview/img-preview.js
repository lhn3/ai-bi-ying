import React, { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ImgPreviewWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'
import Indicator from '@/components/indicator/indicator'
import classNames from 'classnames'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const ImgPreview = memo((props) => {
  const [index, setIndex] = useState(0)
  const [position, setPosition] = useState('next')
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    setIndex(props.currentIndex)

    // 取消滚动条
    document.body.style.overflow = 'hidden'
    // 关闭显示滚动条
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [props.currentIndex])

  // 点击上一个下一个,或者点击item直接设置index
  const handelClick = (val) => {
    // 当点击左右的时候
    if (typeof val === 'string') {
      // 记录左右按钮被点击，图片动画左右移动进入
      setPosition(val)
      let newIndex = val === 'next' ? index + 1 : index - 1
      if (newIndex < 0) newIndex = props.imgList?.length - 1
      if (newIndex > props.imgList?.length - 1) newIndex = 0
      setIndex(newIndex)
    } else if (typeof val === 'number') {
      // 当点击小item时
      if (index === val) return
      setPosition(val > index ? 'next' : 'pre') // 如果点击的新index大于现在的index则是下一个
      setIndex(val)
    }
  }

  return (
    <ImgPreviewWrapper position={position} showList={showList}>
      {/* 关闭按钮*/}
      <div className="close" onClick={() => props.close()}>
        <IconClose />
      </div>

      <div className="img-show">
        {/* 左右控件*/}
        <div
          className="control-btn left-btn"
          onClick={() => handelClick('pre')}
        >
          <IconArrowLeft width="77" height="77" />
        </div>

        {/* 动画*/}
        <SwitchTransition mode="out-in">
          <CSSTransition key={index} timeout={200} classNames="mySwitch">
            <img src={props.imgList?.[index]} />
          </CSSTransition>
        </SwitchTransition>

        <div
          className="control-btn right-btn"
          onClick={() => handelClick('next')}
        >
          <IconArrowRight width="77" height="77" />
        </div>
      </div>

      {/* 轮播图片*/}
      <div className="indicator">
        <div className="indicator-main">
          <div className="tip">
            <div className="tip-num">{`${index + 1}/${
              props.imgList?.length
            }`}</div>
            <div className="tip-control" onClick={() => setShowList(!showList)}>
              {`${showList ? '隐藏' : '显示'}照片列表`}
              {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <Indicator index={index} length={props.imgList?.length} width="80vw">
            {props.imgList?.map((item, ind) => {
              return (
                <div className="img-item" key={item}>
                  <div
                    className={classNames('img-box', { active: index === ind })}
                    onClick={() => handelClick(ind)}
                  >
                    <div className="item-cover" />
                    <img src={item} />
                  </div>
                </div>
              )
            })}
          </Indicator>
        </div>
      </div>
    </ImgPreviewWrapper>
  )
})

ImgPreview.propsType = {
  imgList: PropTypes.array,
  currentIndex: PropTypes.number
}
ImgPreview.defaultProps = {
  imgList: [],
  currentIndex: 0
}

export default ImgPreview
