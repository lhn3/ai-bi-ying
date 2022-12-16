import {memo} from 'react'
import {useNavigate,useRoutes} from 'react-router-dom'
import {routes} from './router'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";


const App = memo(() => {
  return (
    <div className="App">
      <Header/>
        {useRoutes(routes)}
      <Footer/>
    </div>
  );
})

export default App;
