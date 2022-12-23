import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getGoodPrice,getHighScore} from "@/service";

//异步请求action
export const homeAction = createAsyncThunk('home', async (val, {dispatch, getState}) => {
  getGoodPrice().then(res=> {
    dispatch(homeSlice.actions.goodPriceAction(res))
  })
  getHighScore().then(res=>{
    dispatch(homeSlice.actions.highScoreAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPrice:{},
    highScore:{}
  },
  reducers: {
    goodPriceAction(state,action){
      state.goodPrice = action.payload
    },
    highScoreAction(state,action){
      state.highScore = action.payload
    }
  }
})

export default homeSlice