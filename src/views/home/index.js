import {memo, useEffect} from 'react'
import homeSlice, {highScoreAction} from "@/store/home-slice";
import {useDispatch, useSelector} from 'react-redux'

const Home = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(highScoreAction())
  }, [])

  return (
    <div>
      Home
    </div>
  );
})

export default Home;
