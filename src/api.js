import { cryptoAssets, cryptoData } from "./data";

export function FetchCrypto() {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(cryptoData)
        }, 1)
    })
}
export function FetchCryptoAssets() {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(cryptoAssets)
        }, 1)
    })
}