import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";
import { Provider } from 'react-redux'

import App from './App';
import store from '@/store'
import 'normalize.css'
import '@/assets/css/reset.less'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*使用router*/}
    <HashRouter>
      {/*未加载出来展示的内容*/}
      <React.Suspense fallback={<h1>Loading...</h1>}>
        {/*使用redux*/}
        <Provider store={store}>
          <App />
        </Provider>
      </React.Suspense>
    </HashRouter>
  </React.StrictMode>
);
