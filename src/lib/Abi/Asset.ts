export const abi = [
    {
      inputs: [
        {
          internalType: "address",
          name: "_marketStorageModule",
          type: "address",
        },
        { internalType: "uint256[]", name: "_chainIds", type: "uint256[]" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
      ],
      name: "CryptoAssetAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256[]",
          name: "minLiquidityRequiredForExecution",
          type: "uint256[]",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "isShortable",
          type: "bool",
        },
      ],
      name: "CryptoAssetUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
      ],
      name: "TimedMarketAssetAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "minLiquidityRequiredForExecution",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "referenceAsset",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "marketOpenTime",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "marketCloseTime",
          type: "uint256",
        },
      ],
      name: "TimedMarketAssetUpdated",
      type: "event",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "uint256", name: "id", type: "uint256" },
            {
              internalType: "uint256[]",
              name: "minLiquidityRequiredForExecution",
              type: "uint256[]",
            },
            { internalType: "bool", name: "isWhitelisted", type: "bool" },
            { internalType: "bytes32", name: "assetTickName", type: "bytes32" },
            {
              internalType: "uint256[]",
              name: "chainIdAllowed",
              type: "uint256[]",
            },
            {
              internalType: "address[]",
              name: "assetAddressByChainId",
              type: "address[]",
            },
            {
              internalType: "uint256",
              name: "TOKEN_DECIMALS_PRECISION",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "TOKEN_PRICE_PRECISION",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isIsolatedPoolAllowed",
              type: "bool",
            },
            { internalType: "bool", name: "isSharedPoolAllowed", type: "bool" },
            {
              internalType: "bool",
              name: "isDecentralisedSourceEnabled",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isCentralisedSourceEnabled",
              type: "bool",
            },
            {
              components: [
                { internalType: "bool", name: "isShortable", type: "bool" },
                { internalType: "bool", name: "isStable", type: "bool" },
                { internalType: "bool", name: "isLongable", type: "bool" },
                { internalType: "bool", name: "isCollateral", type: "bool" },
                { internalType: "bool", name: "isReference", type: "bool" },
              ],
              internalType: "struct AssetLib.TradeProps",
              name: "tradeProps",
              type: "tuple",
            },
            {
              components: [
                { internalType: "bool", name: "isSwapEnabled", type: "bool" },
                {
                  internalType: "bool",
                  name: "isMarginTradingEnabled",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isLimitOrderBookEnabled",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isExternalLiquidityEnabled",
                  type: "bool",
                },
              ],
              internalType: "struct AssetLib.MarketProps",
              name: "marketProps",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "maxLeverageFactor",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "positionSizeReserveFactor",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "MAXIMUM_POSITION_SIZE_PER_MARKET",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "MAX_POSITION_PNL_FACTOR",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "MAX_GLOBAL_PNL_FACTOR",
                  type: "uint256",
                },
              ],
              internalType: "struct AssetLib.RiskProps",
              name: "riskProps",
              type: "tuple",
            },
          ],
          internalType: "struct AssetLib.AssetProps",
          name: "cryptoProps",
          type: "tuple",
        },
      ],
      name: "addCryptoAsset",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                { internalType: "uint256", name: "id", type: "uint256" },
                {
                  internalType: "uint256[]",
                  name: "minLiquidityRequiredForExecution",
                  type: "uint256[]",
                },
                { internalType: "bool", name: "isWhitelisted", type: "bool" },
                {
                  internalType: "bytes32",
                  name: "assetTickName",
                  type: "bytes32",
                },
                {
                  internalType: "uint256[]",
                  name: "chainIdAllowed",
                  type: "uint256[]",
                },
                {
                  internalType: "address[]",
                  name: "assetAddressByChainId",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "TOKEN_DECIMALS_PRECISION",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "TOKEN_PRICE_PRECISION",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isIsolatedPoolAllowed",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isSharedPoolAllowed",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isDecentralisedSourceEnabled",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isCentralisedSourceEnabled",
                  type: "bool",
                },
                {
                  components: [
                    { internalType: "bool", name: "isShortable", type: "bool" },
                    { internalType: "bool", name: "isStable", type: "bool" },
                    { internalType: "bool", name: "isLongable", type: "bool" },
                    {
                      internalType: "bool",
                      name: "isCollateral",
                      type: "bool",
                    },
                    { internalType: "bool", name: "isReference", type: "bool" },
                  ],
                  internalType: "struct AssetLib.TradeProps",
                  name: "tradeProps",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isSwapEnabled",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "isMarginTradingEnabled",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "isLimitOrderBookEnabled",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "isExternalLiquidityEnabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct AssetLib.MarketProps",
                  name: "marketProps",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "maxLeverageFactor",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "positionSizeReserveFactor",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "MAXIMUM_POSITION_SIZE_PER_MARKET",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "MAX_POSITION_PNL_FACTOR",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "MAX_GLOBAL_PNL_FACTOR",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct AssetLib.RiskProps",
                  name: "riskProps",
                  type: "tuple",
                },
              ],
              internalType: "struct AssetLib.AssetProps",
              name: "base",
              type: "tuple",
            },
            { internalType: "string", name: "referenceAsset", type: "string" },
            {
              internalType: "uint256",
              name: "marketOpenTimeStamp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "marketOpenDurationsinSeconds",
              type: "uint256",
            },
          ],
          internalType: "struct AssetLib.TimedMarketAssetProps",
          name: "forexOrCommodityProps",
          type: "tuple",
        },
      ],
      name: "addTimedMarketAsset",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "allowedChainIds",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "assetCount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      name: "assetIdToChainIdToAddress",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "assetRequirements",
      outputs: [
        {
          internalType: "enum AssetLib.AssetTypeEnum",
          name: "assetType",
          type: "uint8",
        },
        {
          internalType: "uint256",
          name: "minLiquidityRequiredForExecution",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "uint256", name: "assetId", type: "uint256" },
            {
              components: [
                { internalType: "uint256", name: "id", type: "uint256" },
                {
                  internalType: "uint256[]",
                  name: "minLiquidityRequiredForExecution",
                  type: "uint256[]",
                },
                { internalType: "bool", name: "isWhitelisted", type: "bool" },
                {
                  internalType: "bytes32",
                  name: "assetTickName",
                  type: "bytes32",
                },
                {
                  internalType: "uint256[]",
                  name: "chainIdAllowed",
                  type: "uint256[]",
                },
                {
                  internalType: "address[]",
                  name: "assetAddressByChainId",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "TOKEN_DECIMALS_PRECISION",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "TOKEN_PRICE_PRECISION",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isIsolatedPoolAllowed",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isSharedPoolAllowed",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isDecentralisedSourceEnabled",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isCentralisedSourceEnabled",
                  type: "bool",
                },
                {
                  components: [
                    { internalType: "bool", name: "isShortable", type: "bool" },
                    { internalType: "bool", name: "isStable", type: "bool" },
                    { internalType: "bool", name: "isLongable", type: "bool" },
                    {
                      internalType: "bool",
                      name: "isCollateral",
                      type: "bool",
                    },
                    { internalType: "bool", name: "isReference", type: "bool" },
                  ],
                  internalType: "struct AssetLib.TradeProps",
                  name: "tradeProps",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isSwapEnabled",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "isMarginTradingEnabled",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "isLimitOrderBookEnabled",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "isExternalLiquidityEnabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct AssetLib.MarketProps",
                  name: "marketProps",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "maxLeverageFactor",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "positionSizeReserveFactor",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "MAXIMUM_POSITION_SIZE_PER_MARKET",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "MAX_POSITION_PNL_FACTOR",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "MAX_GLOBAL_PNL_FACTOR",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct AssetLib.RiskProps",
                  name: "riskProps",
                  type: "tuple",
                },
              ],
              internalType: "struct AssetLib.AssetProps",
              name: "newValues",
              type: "tuple",
            },
            {
              internalType: "bool",
              name: "updateMinLiquidityRequiredForExecution",
              type: "bool",
            },
            { internalType: "bool", name: "updateIsWhitelisted", type: "bool" },
            {
              internalType: "bool",
              name: "updateChainIdAllowed",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "updateAssetAddressByChainId",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "updateTOKEN_DECIMALS_PRECISION",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "updateTOKEN_PRICE_PRECISION",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "updateIsIsolatedPoolStatus",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "updateIsSharedPoolStatus",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "updateIsDecentralisedSourceEnabled",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "updateIsCentralisedSourceEnabled",
              type: "bool",
            },
            { internalType: "bool", name: "updateIsShortable", type: "bool" },
            { internalType: "bool", name: "updateIsStable", type: "bool" },
            { internalType: "bool", name: "updateIsLongable", type: "bool" },
            { internalType: "bool", name: "updateIsCollateral", type: "bool" },
            { internalType: "bool", name: "updateIsReference", type: "bool" },
            { internalType: "bool", name: "updateIsSwapEnabled", type: "bool" },
            {
              internalType: "bool",
              name: "updateIsMarginTradingEnabled",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "updateIsLimitOrderBookEnabled",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "updateIsExternalLiquidityEnabled",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "update_maxLeverageFactor",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "update_positionSizeReserveFactor",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "update_MAXIMUM_POSITION_SIZE_PER_MARKET",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "update_MAX_POSITION_PNL_FACTOR",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "update_MAX_GLOBAL_PNL_FACTOR",
              type: "bool",
            },
          ],
          internalType: "struct AssetManager.AssetPropsUpdateOperation[]",
          name: "assetPropsUpdates",
          type: "tuple[]",
        },
        {
          components: [
            { internalType: "uint256", name: "assetId", type: "uint256" },
            {
              components: [
                {
                  components: [
                    { internalType: "uint256", name: "id", type: "uint256" },
                    {
                      internalType: "uint256[]",
                      name: "minLiquidityRequiredForExecution",
                      type: "uint256[]",
                    },
                    {
                      internalType: "bool",
                      name: "isWhitelisted",
                      type: "bool",
                    },
                    {
                      internalType: "bytes32",
                      name: "assetTickName",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256[]",
                      name: "chainIdAllowed",
                      type: "uint256[]",
                    },
                    {
                      internalType: "address[]",
                      name: "assetAddressByChainId",
                      type: "address[]",
                    },
                    {
                      internalType: "uint256",
                      name: "TOKEN_DECIMALS_PRECISION",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "TOKEN_PRICE_PRECISION",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "isIsolatedPoolAllowed",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "isSharedPoolAllowed",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "isDecentralisedSourceEnabled",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "isCentralisedSourceEnabled",
                      type: "bool",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "isShortable",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "isStable",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "isLongable",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "isCollateral",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "isReference",
                          type: "bool",
                        },
                      ],
                      internalType: "struct AssetLib.TradeProps",
                      name: "tradeProps",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "isSwapEnabled",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "isMarginTradingEnabled",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "isLimitOrderBookEnabled",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "isExternalLiquidityEnabled",
                          type: "bool",
                        },
                      ],
                      internalType: "struct AssetLib.MarketProps",
                      name: "marketProps",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "maxLeverageFactor",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "positionSizeReserveFactor",
                          type: "uint256",
                        },
                        {
                          internalType: "bool",
                          name: "MAXIMUM_POSITION_SIZE_PER_MARKET",
                          type: "bool",
                        },
                        {
                          internalType: "uint256",
                          name: "MAX_POSITION_PNL_FACTOR",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "MAX_GLOBAL_PNL_FACTOR",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct AssetLib.RiskProps",
                      name: "riskProps",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct AssetLib.AssetProps",
                  name: "base",
                  type: "tuple",
                },
                {
                  internalType: "string",
                  name: "referenceAsset",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "marketOpenTimeStamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "marketOpenDurationsinSeconds",
                  type: "uint256",
                },
              ],
              internalType: "struct AssetLib.TimedMarketAssetProps",
              name: "newValues",
              type: "tuple",
            },
            {
              internalType: "bool",
              name: "updateReferenceAsset",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "updateMarketOpenTimeStamp",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "updateMarketOpenDurationsinSeconds",
              type: "bool",
            },
          ],
          internalType:
            "struct AssetManager.TimedMarketAssetPropsUpdateOperation[]",
          name: "timedMarketAssetPropsUpdates",
          type: "tuple[]",
        },
      ],
      name: "batchUpdateAssets",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "cryptoAssets",
      outputs: [
        { internalType: "uint256", name: "id", type: "uint256" },
        { internalType: "bool", name: "isWhitelisted", type: "bool" },
        { internalType: "bytes32", name: "assetTickName", type: "bytes32" },
        {
          internalType: "uint256",
          name: "TOKEN_DECIMALS_PRECISION",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "TOKEN_PRICE_PRECISION",
          type: "uint256",
        },
        { internalType: "bool", name: "isIsolatedPoolAllowed", type: "bool" },
        { internalType: "bool", name: "isSharedPoolAllowed", type: "bool" },
        {
          internalType: "bool",
          name: "isDecentralisedSourceEnabled",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "isCentralisedSourceEnabled",
          type: "bool",
        },
        {
          components: [
            { internalType: "bool", name: "isShortable", type: "bool" },
            { internalType: "bool", name: "isStable", type: "bool" },
            { internalType: "bool", name: "isLongable", type: "bool" },
            { internalType: "bool", name: "isCollateral", type: "bool" },
            { internalType: "bool", name: "isReference", type: "bool" },
          ],
          internalType: "struct AssetLib.TradeProps",
          name: "tradeProps",
          type: "tuple",
        },
        {
          components: [
            { internalType: "bool", name: "isSwapEnabled", type: "bool" },
            {
              internalType: "bool",
              name: "isMarginTradingEnabled",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isLimitOrderBookEnabled",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isExternalLiquidityEnabled",
              type: "bool",
            },
          ],
          internalType: "struct AssetLib.MarketProps",
          name: "marketProps",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "maxLeverageFactor",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "positionSizeReserveFactor",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "MAXIMUM_POSITION_SIZE_PER_MARKET",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "MAX_POSITION_PNL_FACTOR",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "MAX_GLOBAL_PNL_FACTOR",
              type: "uint256",
            },
          ],
          internalType: "struct AssetLib.RiskProps",
          name: "riskProps",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "deviationData",
      outputs: [
        { internalType: "uint256", name: "referencePrice", type: "uint256" },
        {
          internalType: "uint256",
          name: "maxDeviationPercentage",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "assetId", type: "uint256" },
        { internalType: "uint256", name: "chainIdIndex", type: "uint256" },
      ],
      name: "getAssetAddressByChainId",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_assetId", type: "uint256" }],
      name: "getAssetCentralisedSourceStatus",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_assetId", type: "uint256" }],
      name: "getAssetDecentralisedSourceStatus",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "assetId", type: "uint256" }],
      name: "getAssetPriceFromMarket",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "assetId", type: "uint256" }],
      name: "getAssetReferencePrice",
      outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_assetId", type: "uint256" }],
      name: "getAssetTickByAssetId",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_assetId", type: "uint256" }],
      name: "getAssetTradeProps",
      outputs: [
        { internalType: "bool", name: "", type: "bool" },
        { internalType: "bool", name: "", type: "bool" },
        { internalType: "bool", name: "", type: "bool" },
        { internalType: "bool", name: "", type: "bool" },
        { internalType: "bool", name: "", type: "bool" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "assetId", type: "uint256" }],
      name: "getChainIdAllowed",
      outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "assetId", type: "uint256" }],
      name: "getIsWhitelisted",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "marketId", type: "uint256" }],
      name: "getMarketLiquidity",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "assetId", type: "uint256" }],
      name: "getMinLiquidityRequiredForExecution",
      outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "assetId", type: "uint256" }],
      name: "getTokenDecimalsPrecision",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "assetId", type: "uint256" }],
      name: "getTokenPricePrecision",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "assetId", type: "uint256" }],
      name: "isMarketOpen",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "assetId", type: "uint256" },
        { internalType: "uint256", name: "referencePrice", type: "uint256" },
        {
          internalType: "uint256",
          name: "maxDeviationPercentage",
          type: "uint256",
        },
      ],
      name: "setDeviationData",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "assetId", type: "uint256" },
        {
          internalType: "uint256",
          name: "longSpreadPercentage",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "shortSpreadPercentage",
          type: "uint256",
        },
        { internalType: "bool", name: "spreadEnabled", type: "bool" },
      ],
      name: "setSpreadData",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "spreadData",
      outputs: [
        {
          internalType: "uint256",
          name: "longSpreadPercentage",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "shortSpreadPercentage",
          type: "uint256",
        },
        { internalType: "bool", name: "spreadEnabled", type: "bool" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "timedMarketAssets",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "id", type: "uint256" },
            {
              internalType: "uint256[]",
              name: "minLiquidityRequiredForExecution",
              type: "uint256[]",
            },
            { internalType: "bool", name: "isWhitelisted", type: "bool" },
            { internalType: "bytes32", name: "assetTickName", type: "bytes32" },
            {
              internalType: "uint256[]",
              name: "chainIdAllowed",
              type: "uint256[]",
            },
            {
              internalType: "address[]",
              name: "assetAddressByChainId",
              type: "address[]",
            },
            {
              internalType: "uint256",
              name: "TOKEN_DECIMALS_PRECISION",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "TOKEN_PRICE_PRECISION",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isIsolatedPoolAllowed",
              type: "bool",
            },
            { internalType: "bool", name: "isSharedPoolAllowed", type: "bool" },
            {
              internalType: "bool",
              name: "isDecentralisedSourceEnabled",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isCentralisedSourceEnabled",
              type: "bool",
            },
            {
              components: [
                { internalType: "bool", name: "isShortable", type: "bool" },
                { internalType: "bool", name: "isStable", type: "bool" },
                { internalType: "bool", name: "isLongable", type: "bool" },
                { internalType: "bool", name: "isCollateral", type: "bool" },
                { internalType: "bool", name: "isReference", type: "bool" },
              ],
              internalType: "struct AssetLib.TradeProps",
              name: "tradeProps",
              type: "tuple",
            },
            {
              components: [
                { internalType: "bool", name: "isSwapEnabled", type: "bool" },
                {
                  internalType: "bool",
                  name: "isMarginTradingEnabled",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isLimitOrderBookEnabled",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isExternalLiquidityEnabled",
                  type: "bool",
                },
              ],
              internalType: "struct AssetLib.MarketProps",
              name: "marketProps",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "maxLeverageFactor",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "positionSizeReserveFactor",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "MAXIMUM_POSITION_SIZE_PER_MARKET",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "MAX_POSITION_PNL_FACTOR",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "MAX_GLOBAL_PNL_FACTOR",
                  type: "uint256",
                },
              ],
              internalType: "struct AssetLib.RiskProps",
              name: "riskProps",
              type: "tuple",
            },
          ],
          internalType: "struct AssetLib.AssetProps",
          name: "base",
          type: "tuple",
        },
        { internalType: "string", name: "referenceAsset", type: "string" },
        {
          internalType: "uint256",
          name: "marketOpenTimeStamp",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "marketOpenDurationsinSeconds",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "tokenAddressToAssetId",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_assetId", type: "uint256" },
        {
          internalType: "address[]",
          name: "_assetAddresses",
          type: "address[]",
        },
      ],
      name: "updateAssetAddressByChainId",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_assetId", type: "uint256" },
        { internalType: "bool", name: "_isIsolatedPoolStatus", type: "bool" },
        { internalType: "bool", name: "_isSharedPoolStatus", type: "bool" },
      ],
      name: "updateAssetListingStage",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_assetId", type: "uint256" },
        {
          internalType: "uint256",
          name: "_maxLeverageFactor",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_positionSizeReserveFactor",
          type: "uint256",
        },
        { internalType: "bool", name: "_maxPosSizePerMarket", type: "bool" },
        { internalType: "uint256", name: "_maxPosPnlFactor", type: "uint256" },
        {
          internalType: "uint256",
          name: "_maxGlobalPnlFactor",
          type: "uint256",
        },
      ],
      name: "updateAssetRiskFactors",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_assetId", type: "uint256" },
        {
          internalType: "uint256[]",
          name: "_minLiquidityRequiredForExecution",
          type: "uint256[]",
        },
      ],
      name: "updateMinLiquidity",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_assetId", type: "uint256" },
        { internalType: "bool", name: "_isDecentralisedEnabled", type: "bool" },
        { internalType: "bool", name: "_isCentralisedEnabled", type: "bool" },
      ],
      name: "updateOracleSourceStatus",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_assetId", type: "uint256" },
        {
          internalType: "uint256",
          name: "_marketOpenTimestamp",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_marketOpenDuration",
          type: "uint256",
        },
      ],
      name: "updateTimedMarketAssetMarketTimings",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_assetId", type: "uint256" },
        { internalType: "string", name: "_referenceAsset", type: "string" },
      ],
      name: "updateTimedMarketAssetReferenceAsset",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_assetId", type: "uint256" },
        { internalType: "bool", name: "_isCollateral", type: "bool" },
      ],
      name: "updateTradePropsCollateral",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_assetId", type: "uint256" },
        { internalType: "bool", name: "_isLongable", type: "bool" },
      ],
      name: "updateTradePropsLongable",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_assetId", type: "uint256" },
        { internalType: "bool", name: "_isReference", type: "bool" },
      ],
      name: "updateTradePropsReference",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_assetId", type: "uint256" },
        { internalType: "bool", name: "_isShortable", type: "bool" },
      ],
      name: "updateTradePropsShortable",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_assetId", type: "uint256" },
        { internalType: "bool", name: "_isStable", type: "bool" },
      ],
      name: "updateTradePropsStable",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_assetId", type: "uint256" },
        { internalType: "bool", name: "_isWhitelisted", type: "bool" },
      ],
      name: "updateWhitelistedStatus",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
]
