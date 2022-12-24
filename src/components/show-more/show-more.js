import {memo} from 'react'
import {ShowMoreWrapper} from "./style";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import PropTypes from "prop-types";

const ShowMore = memo((props) => {
  return (
    <ShowMoreWrapper ifColor={!!props.info}>
      <span className='more-tip'>{props.info ? `查看更多${props.info}房源` : '显示全部'}</span>
      <IconArrowRight/>
    </ShowMoreWrapper>
  );
})

ShowMore.propsType = {
  info: PropTypes.string
}

export default ShowMore;
