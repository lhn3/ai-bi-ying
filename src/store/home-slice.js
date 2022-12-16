import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getHighScore} from "@/service";

//异步请求action
export const highScoreAction = createAsyncThunk('highScoreAction', async (val, {dispatch, getState}) => {
  const res = await getHighScore()
  return {...res}
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {},
  reducers: {
  },
  //监听异步action
  extraReducers: {
    [highScoreAction.fulfilled](state, action) {
      console.log(action.payload)
    }
  }
})

export default homeSlice