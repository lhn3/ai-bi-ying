import {memo} from 'react'
import {HeaderRightWrapper} from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from "@/assets/svg/icon-profile-menu"
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar"

const HeaderRight = memo(() => {
  return (
    <HeaderRightWrapper>
      <span className='btn'>登录</span>
      <span className='btn'>注册</span>
      <span className='btn'><IconGlobal/></span>
      <div className='avatar-box'>
        <IconProfileMenu/>
        <IconProfileAvatar/>
      </div>
    </HeaderRightWrapper>
  );
})

export default HeaderRight;
