
import { readContract } from '@wagmi/core';
import { abi } from '@/lib/Abi/Asset';
import { config } from '@/lib/config';


export const  getMarketopen = async (args:any) => {
     try {
      const result = await readContract(config , {
        abi ,
          address : "0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE",
          functionName : "isMarketOpen",
          args: [args]
      })
       
      return result?.toString();

     }
     catch(error) {
        console.log("Failed To Fetch getMarketopen " , error)
        throw error;
     }
}