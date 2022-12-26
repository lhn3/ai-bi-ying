import { configureStore } from '@reduxjs/toolkit'
import homeSlice from "@/store/home-slice";
import entireSlice from "@/store/entire-slice";
import detailSlice from "@/store/detail-slice";

//已经集成了thunk中间件和devTools
const store = configureStore({
  reducer:{
    home: homeSlice.reducer,
    entire: entireSlice.reducer,
    detail: detailSlice.reducer,
  }
})

export default store