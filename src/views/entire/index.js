import {memo, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {EntireWrapper} from "@/views/entire/style";
import EntireHeader from "./entire-header/entire-header";
import {entireAction} from '@/store/entire-slice'
import Pagination from '@mui/material/Pagination';
import InfoItem from "@/components/info-item/info-item";

const Entire = memo(() => {
  const dispatch = useDispatch()

  const {page, limit, total, dataList, loading} = useSelector(state => ({
    page: state.entire.page,
    limit: state.entire.limit,
    total: state.entire.total,
    dataList: state.entire.dataList,
    loading: state.entire.loading
  }), shallowEqual)

  useEffect(() => {
    dispatch(entireAction())
  }, [])

  //修改页码
  const changePage = (e, p) => {
    window.scroll(0, 0)
    dispatch(entireAction(p))
  }

  return (
    <EntireWrapper>
      {/*头部*/}
      <EntireHeader/>

      <div className='entire-body'>
        {loading ? <div className='entire-cover'/> : null}
        <div className='entire-tip'>
          <img width="40" height="40" alt=""
               src="//z1.muscache.cn/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-suitcase.2b1ee4bba1967bb8827d8b3a6348489a.gif"/>
          <div><span>马上就要出门旅行了？</span> 使用「闪订」筛选条件，查看可即时预订的房源。</div>
        </div>
        <div className='entire-title'>{total}多处住宿</div>

        {/*内容*/}
        <div className='entire-box'>
          {
            dataList.map(item => <InfoItem key={item._id} info={item} width='25%'/>)
          }
        </div>

        {/*分页*/}
        <div className='pagination'>
          <Pagination count={Math.ceil(total / limit)} page={page} onChange={changePage}/>
          <div className='num-tip'>第 {((page - 1) * limit) + 1} – {page * limit} 个房源，共超过 {total} 个</div>
          <div className='message'>包含额外附加费用及适用税费。</div>
        </div>
      </div>
    </EntireWrapper>
  );
})

export default Entire;