import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';

import './styles/index.less';

import { App } from './App';
import { antTheme } from './antTheme';

const root = createRoot(document.getElementById('app'));

root.render(
  <ConfigProvider theme={antTheme}>
    <App />
  </ConfigProvider>
);
