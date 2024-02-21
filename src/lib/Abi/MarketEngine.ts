export const MarketEngine = [
  {
    inputs: [
      {
        internalType: "contract MarketStorageModule",
        name: "_marketStorage",
        type: "address",
      },
      {
        internalType: "contract IAssetManager",
        name: "_assetManager",
        type: "address",
      },
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
        name: "marketId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "marketToken",
        type: "address",
      },
    ],
    name: "MarketCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "marketId",
        type: "uint256",
      },
    ],
    name: "MarketDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bool", name: "paused", type: "bool" },
    ],
    name: "MarketOperationToggled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "marketId",
        type: "uint256",
      },
      {
        components: [
          { internalType: "uint8", name: "marketId", type: "uint8" },
          { internalType: "int256", name: "poolValueUsd", type: "int256" },
          { internalType: "int256", name: "longPnl", type: "int256" },
          { internalType: "int256", name: "shortPnl", type: "int256" },
          { internalType: "int256", name: "netPnl", type: "int256" },
          { internalType: "uint256", name: "longTokensUsd", type: "uint256" },
          {
            internalType: "uint256",
            name: "shortTokensUsd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBorrowingFees",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowingFeePoolFactor",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct MarketPoolProps.Props",
        name: "newPoolProps",
        type: "tuple",
      },
    ],
    name: "MarketUpdated",
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
    inputs: [
      { internalType: "uint256[]", name: "indexAssetIds", type: "uint256[]" },
      { internalType: "uint256[]", name: "longAssetIds", type: "uint256[]" },
      { internalType: "uint256[]", name: "shortAssetIds", type: "uint256[]" },
      { internalType: "string", name: "marketType", type: "string" },
      { internalType: "bytes32", name: "assetType", type: "bytes32" },
    ],
    name: "createMarket",
    outputs: [
      {
        components: [
          { internalType: "address", name: "marketToken", type: "address" },
          {
            internalType: "uint256[]",
            name: "indexAssetIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "longAssetIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "shortAssetIds",
            type: "uint256[]",
          },
        ],
        internalType: "struct MarketProps.Props",
        name: "marketProps",
        type: "tuple",
      },
      { internalType: "uint8", name: "marketId", type: "uint8" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "marketId", type: "uint8" }],
    name: "deleteMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "marketId", type: "uint256" }],
    name: "getMarketById",
    outputs: [
      {
        components: [
          { internalType: "address", name: "marketToken", type: "address" },
          {
            internalType: "uint256[]",
            name: "indexAssetIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "longAssetIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "shortAssetIds",
            type: "uint256[]",
          },
        ],
        internalType: "struct MarketProps.Props",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isSwapEnabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketOperationPaused",
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
    inputs: [{ internalType: "bool", name: "_paused", type: "bool" }],
    name: "toggleMarketOperation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
