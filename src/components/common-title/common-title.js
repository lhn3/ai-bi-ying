import {memo} from 'react'
import PropTypes from "prop-types"
import {CommonTitleWrapper} from "./style";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const CommonTitle = memo(props => {
  return (
    <CommonTitleWrapper>
      <div className='title'>
        <div className='title1'>{props.title}</div>
        {
          props.tip ? <div className='title2'>{props.tip}</div> : null
        }
      </div>
      <div className='icon'>
        <IconArrowRight/>
      </div>
    </CommonTitleWrapper>
  );
})

CommonTitle.propTypes = {
  title: PropTypes.string,
  tip: PropTypes.string
}

export default CommonTitle;
