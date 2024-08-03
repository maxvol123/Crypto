import { Layout } from 'antd';
import Header from './components/layout/Header';
import Sider from './components/layout/Sider';
import Content from './components/layout/Content';

export default function App() {
  return(
    <Layout>
      <Header/>
    <Layout>
      <Sider/>
      <Content/>
    </Layout>
  </Layout>
  )
}
