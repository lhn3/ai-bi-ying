import {memo} from 'react'
import PropTypes from "prop-types"
import {CommonTitleWrapper} from "./style";

const CommonTitle = memo(props => {
  return (
    <CommonTitleWrapper>
      <div className='title'>
        <div className='title1'>{props.title}</div>
        {
          props.tip ? <div className='title2'>{props.tip}</div> : null
        }
      </div>
    </CommonTitleWrapper>
  );
})

CommonTitle.propTypes = {
  title: PropTypes.string,
  tip: PropTypes.string
}

export default CommonTitle;
