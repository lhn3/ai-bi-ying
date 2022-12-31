import {memo} from 'react'
import {HeaderWrapper} from './style'
import HeaderLeft from "@/components/header/header-left/header-left";
import HeaderCenter from "@/components/header/header-center/header-center";
import HeaderRight from "@/components/header/header-right/header-right";
import {shallowEqual, useSelector} from "react-redux";

const Header = memo(() => {

  //获取参数判断头部是否透明固定
  const {isFixed, isTransparent} = useSelector(state => ({
    isFixed: state.main.headerIsFixed,
    isTransparent: state.main.headerIsTransparent
  }), shallowEqual)
  return (
    <HeaderWrapper isFixed={isFixed} isTransparent={isTransparent}>
      <HeaderLeft isTransparent={isTransparent}/>
      <HeaderCenter/>
      <HeaderRight isTransparent={isTransparent}/>
    </HeaderWrapper>
  );
})

export default Header;
