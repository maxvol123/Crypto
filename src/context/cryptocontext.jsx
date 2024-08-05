import { createContext, useEffect, useState } from "react";
import { FetchCrypto, FetchCryptoAssets } from '../api';
import { percentdifference } from '../utils';
const CryptoContext = createContext({
    assets: [],
    crypto: [],
    loading:false,
})

export function CryptoContextProvider({children}) {
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
    return <CryptoContext.Provider value={{loading, crypto, assets}}>
{children}
    </CryptoContext.Provider>
}
export default CryptoContext