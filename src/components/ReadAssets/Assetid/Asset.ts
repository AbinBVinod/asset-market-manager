import { readContract } from '@wagmi/core';
import { abi } from '@/lib/Abi/Asset';
import { config } from '@/lib/config';



export const getAssetCount = async () => {
  try {
    const result = await readContract(config, {
      abi,
      address: '0xc10a62a740A50BC9bd7c444bb98d3bA1FF888da0',
      functionName: 'assetCount',
    });
    
    return result?.toString();
  } catch (error) {
    console.error('Failed to fetch asset count:', error);
    throw error; 
  }
};