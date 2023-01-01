import {memo, useEffect} from 'react'
import {useLocation, useRoutes} from 'react-router-dom'
import {routes} from './router'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";


const App = memo(() => {
  const location = useLocation()

  //页面切换自动滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app">
      <Header/>
      <div className='pages'>
        {useRoutes(routes)}
      </div>
      <Footer/>
    </div>
  );
})

export default App;
