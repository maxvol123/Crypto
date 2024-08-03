import { Layout } from 'antd';
export default function Header(params) {
    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height: 60,
        paddingInline: 48,
        lineHeight: '64px',
        backgroundColor: '#4096ff',
      };
    return(
        <Layout.Header style={headerStyle}>Header</Layout.Header>
    )
}