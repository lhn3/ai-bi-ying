import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getGoodPrice, getHighScore, getHotArea, getRecommend} from "@/service";

//异步请求action
export const homeAction = createAsyncThunk('home', async (val, {dispatch, getState}) => {
  getGoodPrice().then(res => {
    dispatch(homeSlice.actions.goodPriceAction(res))
  })
  getHighScore().then(res => {
    dispatch(homeSlice.actions.highScoreAction(res))
  })
  getHotArea().then(res => {
    dispatch(homeSlice.actions.hotAreaAction(res))
  })
  getRecommend().then(res => {
    dispatch(homeSlice.actions.recommendAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPrice: {},
    highScore: {},
    hotArea: [],
    recommend: []
  },
  reducers: {
    goodPriceAction(state, action) {
      state.goodPrice = action.payload
    },
    highScoreAction(state, action) {
      state.highScore = action.payload
    },
    hotAreaAction(state, action) {
      state.hotArea = action.payload
    },
    recommendAction(state, action) {
      state.recommend = action.payload
    }
  }
})

export default homeSlice