import React, { memo, useState } from 'react'
import { HeaderCenterWrapper2 } from './style'
import classNames from 'classnames'

const HeaderCenter2 = memo((props) => {
  const [index, setIndex] = useState(0)

  return (
    <HeaderCenterWrapper2 isTransparent={props.isTransparent}>
      <div className="main-info">
        <div
          className={classNames({
            'info-active': index === 0,
            'info-dis': index !== 0
          })}
          onClick={() => setIndex(0)}
        >
          搜索房源
        </div>
        <div
          className={classNames({
            'info-active': index === 1,
            'info-dis': index !== 1
          })}
          onClick={() => setIndex(1)}
        >
          搜索体验
        </div>
      </div>
    </HeaderCenterWrapper2>
  )
})

export default HeaderCenter2
