import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getGoodPrice} from "@/service";

//异步请求action
export const GoodPriceAction = createAsyncThunk('goodPrice', async (val, {dispatch, getState}) => {
  const res = await getGoodPrice()
  return {...res}
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPrice:{}
  },
  reducers: {
  },
  //监听异步action
  extraReducers: {
    [GoodPriceAction.fulfilled](state, action) {
      state.goodPrice = action.payload
    }
  }
})

export default homeSlice