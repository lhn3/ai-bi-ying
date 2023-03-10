import React, { memo } from 'react'
import { HeaderCenterSearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import IconSearchBar from '@/assets/svg/icon-search-bar'

const HeaderCenterSearch = memo((props) => {
  return (
    <HeaderCenterSearchWrapper
      isTransparent={props.isTransparent}
      isFocus={props.isFocus}
      isFixed={props.isFixed}
    >
      <CSSTransition
        in={props.isFocus}
        timeout={300}
        unmountOnExit={true}
        classNames="mySwitch3"
      >
        <div className="se-main">
          <div className="se-box se-left">
            <div className="se-message">
              <div className="se-title">城市</div>
              <div className="se-tip">你想去哪个城市</div>
            </div>
          </div>
          <div className="se-box se-cen">
            <div className="se-message se-border">
              <div className="se-title">入住退房日期</div>
              <div className="se-tip">清在日历中选择</div>
            </div>
          </div>
          <div className="se-box se-right">
            <div className="se-message">
              <div className="se-title">关键词</div>
              <div className="se-tip">景点/地址/房源名</div>
            </div>
            <div className="se-icon">
              <IconSearchBar />
            </div>
          </div>
        </div>
      </CSSTransition>
    </HeaderCenterSearchWrapper>
  )
})

export default HeaderCenterSearch
