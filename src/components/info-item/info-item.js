import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { InfoItemWrapper } from './style'
import { Rate } from 'antd'
import Indicator from '@/components/indicator/indicator'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import classNames from 'classnames'

const InfoItem = memo((props) => {
  const [index, setIndex] = useState(0)

  // 点击上一个下一个
  const handelClick = (val) => {
    let newIndex = val === 'next' ? index + 1 : index - 1
    if (newIndex < 0) newIndex = props.info.picture_urls?.length - 1
    if (newIndex > props.info.picture_urls?.length - 1) newIndex = 0
    setIndex(newIndex)
  }

  return (
    <InfoItemWrapper width={props.width}>
      <div className="cover">
        {/* 图片*/}
        <img
          src={props.info.picture_urls?.[index] || props.info.picture_url}
          alt={props.info.name}
          onClick={() =>
            props.saveClickItem ? props.saveClickItem(props.info) : null
          }
        />

        {/* 左右控件*/}
        {props.info.picture_urls?.length ? (
          <div
            className="control-btn left-btn"
            onClick={() => handelClick('pre')}
          >
            <IconArrowLeft width="24" height="24" />
          </div>
        ) : null}
        {props.info.picture_urls?.length ? (
          <div
            className="control-btn right-btn"
            onClick={() => handelClick('next')}
          >
            <IconArrowRight width="24" height="24" />
          </div>
        ) : null}

        {/* 如果有图片列表就展示轮播节点*/}
        {props.info.picture_urls?.length ? (
          <div className="indicator">
            <Indicator
              index={index}
              length={props.info.picture_urls.length}
              width="100px"
            >
              {props.info.picture_urls?.map((item, ind) => {
                return (
                  <div className="box-item" key={item}>
                    <div
                      className={classNames('box', {
                        active: index === ind,
                        'dis-active': ind < index - 2 || ind > index + 2
                      })}
                    />
                  </div>
                )
              })}
            </Indicator>
          </div>
        ) : null}
      </div>

      <div
        className="info-tip"
        onClick={() =>
          props.saveClickItem ? props.saveClickItem(props.info) : null
        }
        style={{ color: props.info.verify_info.text_color }}
      >
        {props.info.verify_info.messages[0]} ·{' '}
        {props.info.verify_info.messages[1]}
      </div>
      <div
        className="info-title text-ellipsis"
        onClick={() =>
          props.saveClickItem ? props.saveClickItem(props.info) : null
        }
      >
        {props.info.name}
      </div>
      <div className="info-price">{props.info.price_format}/晚</div>
      <div className="info-star">
        <Rate
          disabled
          allowHalf
          defaultValue={props.info.star_rating ?? 5}
          style={{
            color: props.info.star_rating_color,
            fontSize: '10px',
            lineHeight: '0'
          }}
        />
        <div className="star-span">{props.info.reviews_count}</div>
        {props.info.bottom_info?.content ? (
          <div
            style={{
              fontSize: props.info.bottom_info.font_size,
              fontWeight: 'bold',
              color: props.info.bottom_info.content_color
            }}
          >
            &ensp;·&ensp;{props.info.bottom_info.content}
          </div>
        ) : null}
      </div>
    </InfoItemWrapper>
  )
})

InfoItem.propTypes = {
  info: PropTypes.object,
  width: PropTypes.string,
  saveClickItem: PropTypes.func
}
InfoItem.defaultProps = {
  info: {},
  width: '100%'
}

export default InfoItem
