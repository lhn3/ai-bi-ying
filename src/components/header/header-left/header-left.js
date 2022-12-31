import {memo} from 'react'
import {useNavigate} from "react-router-dom";
import IconLogo from '@/assets/svg/icon_logo'
import {HeaderLeftWrapper} from './style'

const HeaderLeft = memo((props) => {
  const navigate = useNavigate()
  return (
    <HeaderLeftWrapper isTransparent={props.isTransparent} onClick={() => navigate('/home')}>
      <IconLogo/>
    </HeaderLeftWrapper>
  );
})

export default HeaderLeft;
