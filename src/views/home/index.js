import {memo, useEffect} from 'react'
import {GoodPriceAction} from "@/store/home-slice";
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {HomeWrapper} from "@/views/home/style";
import CommonTitle from "@/components/common-title/common-title";
import InfoBox from "@/components/info-box/info-box";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const Home = memo(() => {
  const dispatch = useDispatch()
  //获取store数据
  const {goodPrice} = useSelector((state) => ({
    goodPrice: state.home.goodPrice
  }), shallowEqual)

  useEffect(() => {
    //获取高性价比房源action
    dispatch(GoodPriceAction())
  }, [])

  return (
    <HomeWrapper>
      <div className='home-top'></div>

      <div className='home-body'>

        <div className='home-box'>
          <CommonTitle title={goodPrice.title}/>
          {/*展示房间的列表们*/}
          <InfoBox list={goodPrice.list} />
          <div className='show-more'>
            <span className='more-tip'>显示全部</span>
            <IconArrowRight />
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
})

export default Home;
