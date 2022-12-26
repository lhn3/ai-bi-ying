import {memo} from 'react'
import {useNavigate} from "react-router-dom";
import {ShowMoreWrapper} from "./style";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import PropTypes from "prop-types";

const ShowMore = memo((props) => {

  const navigate =  useNavigate()

  //点击路由跳转
  const handelClick = e => {
    navigate('/entire')
  }

  return (
    <ShowMoreWrapper ifColor={!!props.info}>
      <div className='more' onClick={handelClick}>
        <span className='more-tip'>{props.info ? `查看更多${props.info}房源` : '显示全部'}</span>
        <IconArrowRight/>
      </div>
    </ShowMoreWrapper>
  );
})

ShowMore.propsType = {
  info: PropTypes.string
}

export default ShowMore;
