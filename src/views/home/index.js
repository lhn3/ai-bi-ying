import {memo, useEffect, useState, useCallback} from 'react'
import {homeAction} from "@/store/home-slice";
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {HomeWrapper} from "@/views/home/style";
import CommonTitle from "@/components/common-title/common-title";
import InfoBox from "@/components/info-box/info-box";
import ShowMore from "@/components/show-more/show-more";
import TabCards from "@/components/tab-cards/tab-cards";

const Home = memo(() => {
  const [hotActive, setHotActive] = useState()
  const [recommendActive, setRecommendActive] = useState()

  const dispatch = useDispatch()
  //获取store数据
  const {goodPrice, highScore, hotArea, recommend} = useSelector((state) => ({
    goodPrice: state.home.goodPrice,
    highScore: state.home.highScore,
    hotArea: state.home.hotArea,
    recommend: state.home.recommend
  }), shallowEqual)

  useEffect(() => {
    /**
     * 获取高性价比房源action
     * 获取高分房源action
     */
    dispatch(homeAction())

  }, [])

  //设置初始化值
  useEffect(() => {
    setHotActive(hotArea.dest_address?.[0]?.name)
    setRecommendActive(recommend.dest_address?.[0]?.name)
  }, [hotArea,recommend])

  //性能优化，向子组件传递函数作为参数使用useCallback包裹
  const changeHotActive = useCallback(val => {
    setHotActive(val)
  }, [])

  const changeRecommendActive = useCallback(val => {
    setRecommendActive(val)
  }, [])

  return (
    <HomeWrapper>
      <div className='home-top'/>
      <div className='home-body'>

        {/*热门目的地*/}
        <div className='home-box'>
          {/*标题*/}
          <CommonTitle title={hotArea.title} tip={hotArea.subtitle}/>
          {/*tab切换*/}
          <TabCards tabList={hotArea.dest_address?.map(item => item.name)} activeName={hotActive}
                    changeTab={changeHotActive}/>
          {/*展示房间的列表们*/}
          <InfoBox list={hotArea.dest_list?.[hotActive]} num={3}/>
          {/*显示全部*/}
          <ShowMore info={hotActive} />
        </div>

        {/*推荐目的地*/}
        <div className='home-box'>
          {/*标题*/}
          <CommonTitle title={recommend.title}/>
          {/*tab切换*/}
          <TabCards tabList={recommend.dest_address?.map(item => item.name)} activeName={recommendActive}
                    changeTab={changeRecommendActive}/>
          {/*展示房间的列表们*/}
          <InfoBox list={recommend.dest_list?.[recommendActive]} num={3}/>
          {/*显示全部*/}
          <ShowMore info={recommendActive} />
        </div>

        {/*佛山高性价比房源*/}
        <div className='home-box'>
          <CommonTitle title={goodPrice.title} showMore={true}/>
          <InfoBox list={goodPrice.list} num={4}/>
          <ShowMore/>
        </div>

        {/*佛山高分好评房源*/}
        <div className='home-box'>
          <CommonTitle title={highScore.title} tip={highScore.subtitle} showMore={true}/>
          <InfoBox list={highScore.list} num={4}/>
          <ShowMore/>
        </div>
      </div>
    </HomeWrapper>
  );
})

export default Home;
