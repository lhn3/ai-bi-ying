import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { CommonTitleWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const CommonTitle = memo((props) => {
  return (
    <CommonTitleWrapper showMore={props.showMore}>
      <div className="title">
        <div className="title1">{props.title}</div>
        {props.tip ? <div className="title2">{props.tip}</div> : null}
      </div>
      {props.showMore ? (
        <div className="icon">
          <IconArrowRight />
        </div>
      ) : null}
    </CommonTitleWrapper>
  )
})

CommonTitle.propTypes = {
  title: PropTypes.string,
  tip: PropTypes.string,
  showMore: PropTypes.bool
}
CommonTitle.defaultProps = {
  title: '默认标题',
  showMore: false
}

export default CommonTitle
