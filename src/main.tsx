/*
 * @Date: 2023-04-04 10:12:00
 * @Author: Bruce
 * @Description: 
 */

import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/apollo';
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ConfigProvider>
  
)
