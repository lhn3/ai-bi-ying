import {memo,useEffect} from 'react'
import {AvatarDialogWrapper} from './style'

const AvatarDialog = memo(() => {
  return (
    <AvatarDialogWrapper>
      <div className='top'>
        <div style={{  fontWeight: 'bold'}}>注册</div>
        <div>登录</div>
      </div>
      <div className='bottom'>
        <div>来爱彼迎发布房源</div>
        <div>开展体验</div>
        <div>帮助</div>
      </div>
    </AvatarDialogWrapper>
  );
})

export default AvatarDialog;
