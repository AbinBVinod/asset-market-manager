import { z } from "zod";

const formSchema = z.object({
  id: z.number(),
  minLiquidityRequiredForExecution: z.number(),
  isWhitelisted: z.boolean(),
  chainIdAllowed: z.string(),
  assetAddressByChainId: z.string(),
  TOKEN_DECIMALS_PRECISION: z.string(),
  TOKEN_PRICE_PRECISION: z.string(),
  isIsolatedPoolAllowed: z.boolean(),
  isSharedPoolAllowed: z.boolean(),
  isDecentralisedSourceEnabled: z.boolean(),
  isCentralisedSourceEnabled: z.boolean(),
  isShortable: z.boolean(),
  isStable: z.boolean(),
  isLongable: z.boolean(),
  isCollateral: z.boolean(),
  isReference: z.boolean(),
  isSwapEnabled: z.boolean(),
  isMarginTradingEnabled: z.boolean(),
  isLimitOrderBookEnabled: z.boolean(),
  isExternalLiquidityEnabled: z.boolean(),
  maxLeverageFactor: z.number(),
  positionSizeReserveFactor: z.number(),
  MAXIMUM_POSITION_SIZE_PER_MARKET: z.boolean(),
  MAX_POSITION_PNL_FACTOR: z.number(),
  MAX_GLOBAL_PNL_FACTOR: z.number(),
});

export default formSchema;