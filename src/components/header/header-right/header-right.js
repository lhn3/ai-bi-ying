import {memo, useEffect, useState} from 'react'
import AvatarDialog from "@/components/header/header-right/cpns/avatar-dialog";
import {HeaderRightWrapper} from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from "@/assets/svg/icon-profile-menu"
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar"

const HeaderRight = memo(() => {
  const [avatarDialog, setAvatarDialog] = useState(false)

  //监听点击事件
  useEffect(()=>{
    const clickHandel = () => setAvatarDialog(false)
    //点三个参数true捕获事件
    window.addEventListener('click',clickHandel)
    return ()=>{
      window.removeEventListener('click',clickHandel)
    }
  },[])

  //点击头像
  const avatarClick = e => {
    e.stopPropagation()
    setAvatarDialog(!avatarDialog)
  }
  return (
    <HeaderRightWrapper avatarDialog={avatarDialog}>
      <div className='header-right'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'><IconGlobal/></span>
        <div className='avatar-box' onClick={avatarClick}>
          <IconProfileMenu/>
          <IconProfileAvatar/>
        </div>
      </div>

      {avatarDialog ? <AvatarDialog/> : null}
    </HeaderRightWrapper>
  );
})

export default HeaderRight;
