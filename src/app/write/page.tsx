"use client"
import { useAccount } from 'wagmi';
import { Account } from '@/components/Wallet/Account';
import { Connect } from '@/components/Wallet/Connect';
import WriteAssetsManager from "@/pages/AssetWrite/WriteManager"

const Write = () => {
    const { isConnected } = useAccount();
  return (
    <>
    {isConnected ? <Account />  : <Connect />}
      {isConnected && <WriteAssetsManager/>}
       {/* </> */}
    
    </>
  )
}
export default Write;