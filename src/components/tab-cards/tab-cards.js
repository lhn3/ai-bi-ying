import {memo} from 'react'
import {TabCardsWrapper} from "./style";
import PropTypes from "prop-types";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import classNames from "classnames";

const TabCards = memo((props) => {

  return (
    <TabCardsWrapper>
      <div className='icon left-icon'><IconArrowLeft/></div>
      <div className='icon right-icon'><IconArrowRight/></div>
      <div className='tabs'>
        {
          props.tabList.map(item => {
            return <div className={classNames('word-tab', {'active-word-tab': item === props.activeName})} key={item}
                        onClick={() => props.changeTab(item)}>{item}</div>
          })
        }
      </div>
    </TabCardsWrapper>
  )
})

TabCards.propTypes = {
  tabList: PropTypes.array,
  activeName: PropTypes.string,
  changeTab: PropTypes.func
}
TabCards.defaultProps = {
  tabList: []
}
export default TabCards;
