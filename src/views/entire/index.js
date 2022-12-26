import {memo, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {EntireWrapper} from "@/views/entire/style";
import EntireHeader from "./entire-header/entire-header";
import {entireAction} from '@/store/entire-slice'
import InfoBox from "@/components/info-box/info-box";

const Entire = memo(() => {
  const dispatch = useDispatch()

  const {page, limit, total, dataList} = useSelector(state => ({
    page: state.entire.page,
    limit: state.entire.limit,
    total: state.entire.total,
    dataList: state.entire.dataList
  }), shallowEqual)

  useEffect(() => {
    dispatch(entireAction())
  }, [])

  return (
    <EntireWrapper>
      {/*头部*/}
      <EntireHeader/>

      <div className='entire-body'>
        <div className='entire-tip'>
          <img width="40" height="40" alt="" src="//z1.muscache.cn/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-suitcase.2b1ee4bba1967bb8827d8b3a6348489a.gif" />
          <div><span>马上就要出门旅行了？</span> 使用「闪订」筛选条件，查看可即时预订的房源。</div>
        </div>
        <div className='entire-title'>300多处住宿</div>
        <InfoBox num={5} list={dataList} />
      </div>
    </EntireWrapper>
  );
})

export default Entire;
