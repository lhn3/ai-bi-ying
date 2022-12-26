import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getEntireList} from '@/service'

//异步请求action
export const entireAction = createAsyncThunk('entire', async (val, {dispatch, getState}) => {
  const data = {
    offset: (getState().entire.page - 1) * getState().entire.limit,
    size: getState().entire.limit
  }
  getEntireList(data).then(res => {
    dispatch(entireSlice.actions.saveDataListAction({dataList: res.list, total: res.totalCount}))
  })
})

const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    page: 1,
    limit: 10,
    total: 0,
    dataList: []
  },
  reducers: {
    //获取数据
    saveDataListAction(state, action) {
      state.total = action.payload.total
      state.dataList = action.payload.dataList
    },
    // 改变页数
    changePageAction(state,action){
      state.page = action.payload
    },
    // 改变每页数量
    changeLimitAction(state,action){
      state.limit = action.payload
    }
  }
})

export default entireSlice