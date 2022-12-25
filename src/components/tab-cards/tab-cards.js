import {memo, useState, useRef, useEffect} from 'react'
import {TabCardsWrapper} from "./style";
import PropTypes from "prop-types";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import classNames from "classnames";

const TabCards = memo((props) => {
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [index, setIndex] = useState(0) //当前在第一个的索引
  const scrollRef = useRef() //滚动区

  //初始化，如果长度不超出就不显示最右侧按钮
  useEffect(() => {
    let width = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
    if (width > 0) setShowRight(true)
  }, [props.tabList])

  //每次按钮第一个位置的标签为下一个，索引加1/减1
  const handelClick = val => {
    let newIndex = index + val
    setIndex(newIndex)
    //拿到下一个标签
    let newItem = scrollRef.current.children[newIndex]
    //拿到下一个标签距最左侧的距离,并让父组件滚动
    scrollRef.current.style.transform = `translate(-${newItem.offsetLeft}px)`

    //判断(所有滚动的长度-左侧滚入的距离)的差是否小于展示区的长度，小于则剩余的部分在展示区能全部展示，需要隐藏右侧按钮
    let res = (scrollRef.current.scrollWidth - newItem.offsetLeft) <= scrollRef.current.clientWidth
    setShowRight(!res)
    setShowLeft(newIndex > 0)
  }

  return (
    <TabCardsWrapper>
      {showLeft ? <div className='icon left-icon' onClick={() => handelClick(-1)}><IconArrowLeft/></div> : null}
      {showRight ? <div className='icon right-icon' onClick={() => handelClick(+1)}><IconArrowRight/></div> : null}
      <div className='tabs'>
        <div ref={scrollRef} className='tab-scroll'>
          {
            props.tabList.map(item => {
              return <div className={classNames('word-tab', {'active-word-tab': item === props.activeName})} key={item}
                          onClick={() => props.changeTab(item)}>{item}</div>
            })
          }
          {
            props.photoList.map(item => {
              return (
                <div key={item.city} className='photo-tab'>
                  <div className='inner'>
                    <img src={item.picture_url} alt='' />
                    <div className='bg-cover' />
                    <div className='photo-info'>
                      <div className='photo-title'>{item.city}</div>
                      <div className='photo-price'>{item.price}</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </TabCardsWrapper>
  )
})

TabCards.propTypes = {
  tabList: PropTypes.array,
  photoList: PropTypes.array,
  activeName: PropTypes.string,
  changeTab: PropTypes.func
}
TabCards.defaultProps = {
  tabList: [],
  photoList: []
}
export default TabCards;
