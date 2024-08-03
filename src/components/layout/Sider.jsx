import { Layout } from 'antd';

export default function Sider() {
    const siderStyle = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#1677ff',
      };
    return(
        <Layout.Sider width="25%" style={siderStyle}>
        Sider
      </Layout.Sider>
    )
}