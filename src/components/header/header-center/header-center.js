import {memo} from 'react'
import {HeaderCenterWrapper} from './style'
import IconSearchBar from "@/assets/svg/icon-search-bar";

const HeaderCenter = memo(() => {
  return (
    <HeaderCenterWrapper>
      <div className='search-title'>搜索房源和体验</div>
      <div className='search-icon'><IconSearchBar /></div>
    </HeaderCenterWrapper>
  );
})

export default HeaderCenter;
