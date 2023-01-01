import {memo} from 'react'
import {HeaderWrapper} from './style'
import HeaderLeft from "@/components/header/header-left/header-left";
import HeaderCenter from "@/components/header/header-center/header-center";
import HeaderRight from "@/components/header/header-right/header-right";
import {shallowEqual, useSelector, useDispatch} from "react-redux";
import HeaderCenter2 from "@/components/header/header-center2/header-center";
import HeaderCenterSearch from "@/components/header/header-center-search/header-center-search";
import {CSSTransition} from "react-transition-group";
import mainSlice from "@/store/main-slice";

const Header = memo(() => {
  const dispatch = useDispatch()

  //获取参数判断头部是否透明固定
  const {isFixed, isTransparent, isFocus} = useSelector(state => ({
    isFixed: state.main.headerIsFixed,
    isTransparent: state.main.headerIsTransparent,
    isFocus: state.main.headerIsFocus,
  }), shallowEqual)

  return (
    <HeaderWrapper isFixed={isFixed} isTransparent={isTransparent} isFocus={isFocus}>
      <HeaderLeft isTransparent={isTransparent}/>

      {/*中间动画区*/}
      <CSSTransition in={isFocus} timeout={300} unmountOnExit={true} classNames='mySwitch1'>
        <HeaderCenter2 isTransparent={isTransparent}/>
      </CSSTransition>
      <CSSTransition in={!isFocus} timeout={300} unmountOnExit={true} classNames='mySwitch2'>
        <HeaderCenter/>
      </CSSTransition>

      {/*二层头部内容*/}
      <HeaderCenterSearch isTransparent={isTransparent} isFocus={isFocus} isFixed={isFixed}/>

      <HeaderRight isTransparent={isTransparent}/>

      {/*蒙层*/}
      {(!isTransparent && isFocus) ?
        <div className='se-cover' onClick={() => dispatch(mainSlice.actions.headerChange({isFocus: false}))}/> : null}
    </HeaderWrapper>
  );
})

export default Header;
