import { readContract } from '@wagmi/core';
import { abi } from '@/lib/Abi/Asset';
import { config } from '@/lib/config';



export const getCryptoAssets = async (arg: any) => {
  try {
    const result = await readContract(config, {
      abi,
      address: "0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE",
      args: [arg],
      functionName: "cryptoAssets",
    }) as any[];;

    // console.log(result);
    if (result) {
      const tradeProps = result[9] || {};
      const marketProps = result[10] || {};
      const riskProps = result[11] || {};

      const structuredResult = {
        id: result[0].toString(),
        isWhitelisted: result[1].toString(),
        assetTickName: result[2].toString(),
        TOKEN_DECIMALS_PRECISION: result[3].toString(),
        TOKEN_PRICE_PRECISION: result[4].toString(),
        isIsolatedPoolAllowed: result[5].toString(),
        isSharedPoolAllowed: result[6].toString(),
        isDecentralisedSourceEnabled: result[7].toString(),
        isCentralisedSourceEnabled: result[8].toString(),
        tradeProps: {
          ...tradeProps,
          isShortable: tradeProps.isShortable?.toString(),
          isStable: tradeProps.isStable?.toString(),
          isLongable: tradeProps.isLongable?.toString(),
          isCollateral: tradeProps.isCollateral?.toString(),
          isReference: tradeProps.isReference?.toString(),
        },
        marketProps: {
          ...marketProps,
          isSwapEnabled: marketProps.isSwapEnabled?.toString(),
          isMarginTradingEnabled:
            marketProps.isMarginTradingEnabled?.toString(),
          isLimitOrderBookEnabled:
            marketProps.isLimitOrderBookEnabled?.toString(),
          isExternalLiquidityEnabled:
            marketProps.isExternalLiquidityEnabled?.toString(),
        },
        riskProps: {
          ...riskProps,
          maxLeverageFactor: riskProps.maxLeverageFactor?.toString(),
          positionSizeReserveFactor:
            riskProps.positionSizeReserveFactor?.toString(),
          MAXIMUM_POSITION_SIZE_PER_MARKET:
            riskProps.MAXIMUM_POSITION_SIZE_PER_MARKET?.toString(),
          MAX_POSITION_PNL_FACTOR:
            riskProps.MAX_POSITION_PNL_FACTOR?.toString(),
          MAX_GLOBAL_PNL_FACTOR: riskProps.MAX_GLOBAL_PNL_FACTOR?.toString(),
        },
      };

      console.log(structuredResult);
      return structuredResult;
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch asset count:", error);
    throw error;
  }
};

  




  