import {memo, useEffect} from 'react'
import {GoodPriceAction} from "@/store/home-slice";
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {HomeWrapper} from "@/views/home/style";
import CommonTitle from "@/components/common-title/common-title";
import InfoItem from "@/components/info-item/info-item";

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
          <CommonTitle title={goodPrice.title} tip={goodPrice.title}/>
          <div className='list'>
            {
              goodPrice.list?.slice(0, 8).map(item => <InfoItem key={item.id} info={item}/>)
            }
          </div>
          <div className='show-more'>展示更多</div>
        </div>
      </div>
    </HomeWrapper>
  );
})

export default Home;
