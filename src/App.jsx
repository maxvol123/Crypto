import { Layout } from 'antd';
import Header from './components/layout/Header';
import Sider from './components/layout/Sider';
import Content from './components/layout/Content';
import { CryptoContextProvider } from './context/cryptocontext';

export default function App() {
  return(
    <CryptoContextProvider>
      <Layout>
        <Header/>
        <Layout>
        <Sider/>
        <Content/>
        </Layout>
    </Layout>
  </CryptoContextProvider>
  )
}
