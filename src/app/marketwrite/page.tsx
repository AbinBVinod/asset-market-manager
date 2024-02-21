"use client"
import { useAccount } from 'wagmi';
import { Account } from '@/components/Wallet/Account';
import { Connect } from '@/components/Wallet/Connect';

import MEWriteManager from "@/pages/MarketEngineWrite/MarketWriteManager/MEWriteManager"

const MarketWrite = () => {
    const { isConnected } = useAccount();
    return (
      <>
       {isConnected ? <Account />  : <Connect />}
      {isConnected && <MEWriteManager/>}
      </>
    )
  }
  export default MarketWrite;