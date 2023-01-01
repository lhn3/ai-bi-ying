import {memo} from 'react'
import {HeaderCenterWrapper} from './style'
import IconSearchBar from "@/assets/svg/icon-search-bar";
import {useDispatch} from "react-redux";
import mainSlice from "@/store/main-slice";

const HeaderCenter = memo(() => {
  const dispatch = useDispatch()

  const headerFocus = () => {
    dispatch(mainSlice.actions.headerChange({isFocus: true}))
  }
  return (
    <HeaderCenterWrapper>
      <div className='search-main' onClick={headerFocus}>
        <div className='search-title'>搜索房源和体验</div>
        <div className='search-icon'><IconSearchBar /></div>
      </div>
    </HeaderCenterWrapper>
  );
})

export default HeaderCenter;
