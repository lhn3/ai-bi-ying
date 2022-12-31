import { configureStore } from '@reduxjs/toolkit'
import homeSlice from "@/store/home-slice";
import entireSlice from "@/store/entire-slice";
import mainSlice from "@/store/main-slice";

//已经集成了thunk中间件和devTools
const store = configureStore({
  reducer:{
    main: mainSlice.reducer,
    home: homeSlice.reducer,
    entire: entireSlice.reducer
  }
})

export default store