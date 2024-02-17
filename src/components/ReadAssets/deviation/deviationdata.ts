import { readContract } from "@wagmi/core";
import { abi } from "@/lib/Abi/Asset";
import { config } from "@/lib/config";

export const getDeviationdata = async (args: any) => {
    try {
      const result:any = await readContract(config, {
        abi,
        address: "0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE",
        functionName: "deviationData",
        args: [args], 
      });
  
    
      if (result && result.length >= 2) {
        const Deviationall = {
          referencePrice: BigInt(result[0]).toString(),
          maxDeviationPercentage: BigInt(result[1]).toString(),
        };
        console.log("Deviation Data:", Deviationall);
        return Deviationall;
      }
      return null;
    } catch (error) {
      console.log("Failed to fetch Deviation Data ", error);
      throw error;
    }
  };
  
