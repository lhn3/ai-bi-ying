import {createSlice} from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerIsFixed: false, //头部是否固定
    headerIsTransparent: false //头部是否透明
  },
  reducers: {
    headerChange(state, action) {
      state.headerIsFixed = action.payload.isFixed
      state.headerIsTransparent = action.payload.isTransparent
    }
  }
})

export default mainSlice