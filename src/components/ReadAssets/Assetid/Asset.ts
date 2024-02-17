import { readContract } from '@wagmi/core';
import { abi } from '@/lib/Abi/Asset';
import { config } from '@/lib/config';



export const getAssetCount = async () => {
  try {
    const result = await readContract(config, {
      abi,
      address: '0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE',
      functionName: 'assetCount',
    });
    
    return result?.toString();
  } catch (error) {
    console.error('Failed to fetch asset count:', error);
    throw error; 
  }
};