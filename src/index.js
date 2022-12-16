import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";
import { Provider } from 'react-redux'
import {ThemeProvider} from "styled-components";

import App from './App';
import store from '@/store'
import 'normalize.css'
import '@/assets/css/reset.less'
import {baseTheme} from "@/assets/theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*使用router*/}
    <HashRouter>
      {/*未加载出来展示的内容*/}
      <React.Suspense fallback={<h1>Loading...</h1>}>
        {/*使用redux*/}
        <Provider store={store}>
          {/*主题参数,子组件的样式组件可以直接获取props.theme*/}
          <ThemeProvider theme={baseTheme}>
            <App />
          </ThemeProvider>
        </Provider>
      </React.Suspense>
    </HashRouter>
  </React.StrictMode>
);
