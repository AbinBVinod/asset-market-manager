import { readContract } from "@wagmi/core"
import { abi } from "@/lib/Abi/Asset"
import { config } from "@/lib/config"


export const getAllowedChainid  = async (args:any) => {
    try {
    const result = await readContract(config , {
        abi,
        address:'0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE',
        functionName : 'allowedChainIds',
        args:[args]
    })
      
     console.log(result)
     
       return result?.toString();
      
    }
    catch (error){
        console.log('Failed to fetch getAllowedChainid :', error);
        throw error;
    }
} 