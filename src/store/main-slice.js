import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerIsFixed: false, // 头部是否固定
    headerIsTransparent: false, // 头部是否透明
    headerIsFocus: false // 头部是否被点击
  },
  reducers: {
    headerChange(state, action) {
      if (action.payload.isFixed !== undefined)
        state.headerIsFixed = action.payload.isFixed
      if (action.payload.isTransparent !== undefined)
        state.headerIsTransparent = action.payload.isTransparent
      if (action.payload.isFocus !== undefined)
        state.headerIsFocus = action.payload.isFocus
    }
  }
})

export default mainSlice
