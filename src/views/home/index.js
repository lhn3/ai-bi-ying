import {memo, useEffect, useState} from 'react'
import {homeAction} from "@/store/home-slice";
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {HomeWrapper} from "@/views/home/style";
import CommonTitle from "@/components/common-title/common-title";
import InfoBox from "@/components/info-box/info-box";
import ShowMore from "@/components/show-more/show-more";
import TabCards from "@/components/tab-cards/tab-cards";

const Home = memo(() => {
  const [hotActive,setHotActive] = useState('')
  const dispatch = useDispatch()
  //获取store数据
  const {goodPrice, highScore, hotArea} = useSelector((state) => ({
    goodPrice: state.home.goodPrice,
    highScore: state.home.highScore,
    hotArea: state.home.hotArea
  }), shallowEqual)

  useEffect(() => {
    /**
     * 获取高性价比房源action
     * 获取高分房源action
     */
    dispatch(homeAction())
  }, [])

  useEffect(() => {
    console.log(hotArea)
    setHotActive(hotArea.dest_address?.[0]?.name)
  }, [])

  return (
    <HomeWrapper>
      <div className='home-top'/>
      <div className='home-body'>

        {/*热门目的地*/}
        <div className='home-box'>
          <CommonTitle title={hotArea.title} tip={hotArea.subtitle}/>
          <TabCards tabList={hotArea.dest_address?.map(item => item.name)} activeName={hotActive} changeTab={val => setHotActive(val)} />
          <InfoBox list={hotArea.dest_list?.[hotActive]} num={3}/>
          <ShowMore/>
        </div>

        {/*佛山高性价比房源*/}
        <div className='home-box'>
          {/*标题*/}
          <CommonTitle title={goodPrice.title} showMore={true}/>
          {/*展示房间的列表们*/}
          <InfoBox list={goodPrice.list} num={4}/>
          {/*显示全部*/}
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
