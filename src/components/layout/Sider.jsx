import { Card, Layout, Statistic, List, Typography, Spin} from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { FetchCrypto, FetchCryptoAssets } from '../../api';
import { percentdifference } from '../../utils';

export default function Sider() {
    const [loading, setLoading] = useState(false)
    const [crypto, setCrypto] = useState([])
    const [assets, setAssets] = useState([])
    useEffect(()=>{
        async function preload() {
            const {result} = await FetchCrypto()
            setLoading(true)
            const assets = await FetchCryptoAssets()
            setCrypto(result)
            setAssets(assets.map(asset=>{
                const coin = result.find(c=>c.id===asset.id)
                return{
                    grow: asset.price < coin.price,
                    growPercent: percentdifference(asset.price, coin.price),
                    totalAmount: asset.amount * coin.price,
                    totalProfit: asset.amount * coin.price - asset.amount*asset.price,
                    ...asset
                }
            }))
            setLoading(false)
        }
        preload()
    },[])
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