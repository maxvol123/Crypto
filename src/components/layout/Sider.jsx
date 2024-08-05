import { Card, Layout, Statistic, List, Typography, Spin} from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import CryptoContext from '../../context/cryptocontext';

export default function Sider() {
  const{loading, assets, crypto}=useContext(CryptoContext) 
    const siderStyle = {
        padding: "1rem"
      };
      if (loading) {
        return(<Spin fullscreen/>)
      }
      
      return(
        <Layout.Sider width="25%" style={siderStyle}>
        {assets.map(asset=>(
        <Card style={{marginBottom:"1rem"}} key={asset.id}>
        <Statistic
      title={<div><img src={crypto.find(element=>element.id===asset.id).icon} alt="" /></div>}
      value={asset.growPercent}
      precision={2}
      valueStyle={{
        color: asset.grow?'#3f8600':'#cf1322',
      }}
      prefix={asset.grow?<ArrowUpOutlined />:<ArrowDownOutlined />}
      suffix="%"
    />
    <List
    size='small'
    dataSource={[
        {title: "Total Profit", value: asset.totalProfit},
        {title: "Asset Amount", value: asset.amount, isCrypto:true},
        {title: "Total Amount", value: asset.totalAmount}
    ]}
    renderItem={(item) => (
    <List.Item>
        <span>{item.title}</span>
        {item.isCrypto && <span>{item.value} {crypto.find(element=>element.id===asset.id).symbol}</span>}
        {!item.isCrypto && <Typography.Text type={asset.grow ? "success":"danger"}>{item.value.toFixed(2)}$</Typography.Text>}
    </List.Item>
  )}
/>
    </Card>
        ))}
      </Layout.Sider>
    )
}