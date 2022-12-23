import {memo} from 'react'
import {ShowMoreWrapper} from "./style";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ShowMore = memo(() => {
  return (
    <ShowMoreWrapper>
      <span className='more-tip'>显示全部</span>
      <IconArrowRight />
    </ShowMoreWrapper>
  );
})

export default ShowMore;
