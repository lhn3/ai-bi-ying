import {memo} from 'react'
import PropTypes from "prop-types"
import {InfoItemWrapper} from "./style";

const InfoItem = memo(props => {
  return (
    <InfoItemWrapper>
      <img className='info-img' src={props.info.picture_url} alt={props.info.name}/>
      <div className='info-tip' style={{color: props.info.verify_info.text_color}}>{props.info.verify_info.messages[0]} · {props.info.verify_info.messages[1]}</div>
      <div className='info-title text-ellipsis'>{props.info.name}</div>
      <div className='info-price'>{props.info.price_format}/晚</div>
    </InfoItemWrapper>
  );
})

InfoItem.propTypes = {
  info: PropTypes.object,
}

export default InfoItem;
