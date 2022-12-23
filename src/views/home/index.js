import {memo, useEffect} from 'react'
import {homeAction} from "@/store/home-slice";
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {HomeWrapper} from "@/views/home/style";
import CommonTitle from "@/components/common-title/common-title";
import InfoBox from "@/components/info-box/info-box";
import ShowMore from "@/components/show-more/show-more";

const Home = memo(() => {
  const dispatch = useDispatch()
  //获取store数据
  const {goodPrice,highScore} = useSelector((state) => ({
    goodPrice: state.home.goodPrice,
    highScore: state.home.highScore
  }), shallowEqual)

  useEffect(() => {
    /**
     * 获取高性价比房源action
     * 获取高分房源action
     */
    dispatch(homeAction())
  }, [])

  return (
    <HomeWrapper>
      <div className='home-top' />
      <div className='home-body'>

        {/*佛山高性价比房源*/}
        <div className='home-box'>
          {/*标题*/}
          <CommonTitle title={goodPrice.title}/>
          {/*展示房间的列表们*/}
          <InfoBox list={goodPrice.list} />
          {/*显示全部*/}
          <ShowMore />
        </div>

        {/*佛山高分好评房源*/}
        <div className='home-box'>
          <CommonTitle title={highScore.title} tip={highScore.subtitle}/>
          <InfoBox list={highScore.list} />
          <ShowMore />
        </div>
      </div>
    </HomeWrapper>
  );
})

export default Home;
