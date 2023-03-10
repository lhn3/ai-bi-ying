import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.less'

import App from './App'
import store from '@/store'
import 'normalize.css'
import '@/assets/css/reset.less'
import { baseTheme } from '@/assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    {/* 未加载出来展示的内容*/}
    {/* 使用redux*/}
    <Provider store={store}>
      {/* 异步加载包裹在store里面，解决store更新数据组件重新渲染*/}
      <React.Suspense fallback={<h1>Loading...</h1>}>
        {/* 主题参数,子组件的样式组件可以直接获取props.theme*/}
        <ThemeProvider theme={baseTheme}>
          <App />
        </ThemeProvider>
      </React.Suspense>
    </Provider>
  </HashRouter>
)
