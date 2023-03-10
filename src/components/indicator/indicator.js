import React, { memo, useEffect, useRef } from 'react'
import PropsType from 'prop-types'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const indicatorRef = useRef()

  useEffect(() => {
    if (props.index === 0) {
      // 滚到头
      indicatorRef.current.style.transform = 'translate(0)'
    } else if (props.index === props.length - 1) {
      // 滚到尾
      indicatorRef.current.style.transform = `translate(-${
        indicatorRef.current.scrollWidth - indicatorRef.current.clientWidth
      }px)`
    } else {
      indicatorScroll()
    }
  }, [props.index])

  // 滚动函数
  const indicatorScroll = () => {
    // 滚动区长度
    const scrollWidth = indicatorRef.current.scrollWidth
    // 可视宽度
    const viewWidth = indicatorRef.current.clientWidth
    // 下一个子元素宽度
    const nextChildWidth =
      indicatorRef.current.children[props.index].clientWidth
    // 下一个子元素到最左边需要滚动的距离
    const offsetLeft = indicatorRef.current.children[props.index].offsetLeft
    // 一个盒子居中距离左侧的距离
    const w = (viewWidth - nextChildWidth) * 0.5
    // 滚动的距离
    let moveWidth = offsetLeft - w

    // 前几个不滚动
    if (moveWidth < 0) moveWidth = 0
    // 后几个不滚动
    if (moveWidth > scrollWidth - viewWidth) moveWidth = scrollWidth - viewWidth

    indicatorRef.current.style.transform = `translate(${-moveWidth}px)`
  }

  return (
    <IndicatorWrapper width={props.width}>
      <div className="indicator-box" ref={indicatorRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  index: PropsType.number,
  length: PropsType.number,
  width: PropsType.string
}
Indicator.defaultProps = {
  index: 0,
  length: 0,
  width: '150px'
}

export default Indicator
