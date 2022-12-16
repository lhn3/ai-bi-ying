import {memo} from 'react'
import IconLogo from '@/assets/svg/icon_logo'
import {HeaderLeftWrapper} from './style'

const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
      <IconLogo />
    </HeaderLeftWrapper>
  );
})

export default HeaderLeft;
