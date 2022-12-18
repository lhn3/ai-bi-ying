import {memo} from 'react'
import PropTypes from "prop-types"
import {InfoItemWrapper} from "./style";
import {Rate} from 'antd';

const InfoItem = memo(props => {
  return (
    <InfoItemWrapper width={props.width}>
      <img className='info-img' src={props.info.picture_url} alt={props.info.name}/>
      <div className='info-tip'
           style={{color: props.info.verify_info.text_color}}>{props.info.verify_info.messages[0]} · {props.info.verify_info.messages[1]}</div>
      <div className='info-title text-ellipsis'>{props.info.name}</div>
      <div className='info-price'>{props.info.price_format}/晚</div>
      <div className='info-star'>
        <Rate disabled allowHalf defaultValue={props.info.star_rating ?? 5}
              style={{color: props.info.star_rating_color, fontSize: '10px', lineHeight: '0'}}/>
        <div className='star-span'>{props.info.reviews_count}</div>
        {
          props.info.bottom_info?.content ? <div style={{
            fontSize: props.info.bottom_info.font_size,
            fontWeight: 'bold',
            color: props.info.bottom_info.content_color
          }}>&ensp;·&ensp;{props.info.bottom_info.content}</div> : null
        }
      </div>
    </InfoItemWrapper>
  );
})

InfoItem.propTypes = {
  info: PropTypes.object,
  width: PropTypes.string
}

export default InfoItem;
