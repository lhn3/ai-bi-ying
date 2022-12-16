import {memo} from 'react'
import {HeaderWrapper} from './style'
import HeaderLeft from "@/components/header/header-left/header-left";
import HeaderCenter from "@/components/header/header-center/header-center";
import HeaderRight from "@/components/header/header-right/header-right";

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft/>
      <HeaderCenter/>
      <HeaderRight/>
    </HeaderWrapper>
  );
})

export default Header;
