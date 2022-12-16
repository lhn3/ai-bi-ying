import {memo} from 'react'
import {useNavigate,useRoutes} from 'react-router-dom'
import {routes} from './router'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";


const App = memo(() => {
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
