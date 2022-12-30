import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getEntireList} from '@/service'

//异步请求action
export const entireAction = createAsyncThunk('entire', async (val, {dispatch, getState}) => {
  dispatch(entireSlice.actions.changeLoading(true))
  if (val) dispatch(entireSlice.actions.changePageAction(val))

  const data = {
    offset: (getState().entire.page - 1) * getState().entire.limit,
    size: getState().entire.limit
  }

  let res = await getEntireList(data)
  dispatch(entireSlice.actions.saveDataListAction({dataList: res.list, total: res.totalCount}))
  dispatch(entireSlice.actions.changeLoading(false))
})

const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    page: 1,
    limit: 20,
    total: 0,
    dataList: [],
    loading: false,
    clickItem: {}
  },
  reducers: {
    //获取数据
    saveDataListAction(state, action) {
      state.total = action.payload.total
      state.dataList = action.payload.dataList
    },
    // 改变页数
    changePageAction(state, action) {
      state.page = action.payload
    },
    // 改变每页数量
    changeLimitAction(state, action) {
      state.limit = action.payload
    },
    changeLoading(state, action) {
      state.loading = action.payload
    },
    //保存点击的item
    changeClickItem(state, action) {
      state.clickItem = action.payload
    },
  }
})

export default entireSlice