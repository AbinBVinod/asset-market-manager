import { readContract } from '@wagmi/core';
import { abi } from '@/lib/Abi/Asset';
import { config } from '@/lib/config';



export const getMLiqReqExe = async (args:any) => {
   
    try {
        const result = await readContract(config, {
            abi,
            address: "0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE",
            functionName : "getMinLiquidityRequiredForExecution",
            args:[args]
        })
         console.log(result)
              return result?.toString();
    }
    catch(error){
     console.log("failed to fetch getMLiqReqExe :" , error)
     throw error
    }

}