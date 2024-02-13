"use client";

import "./Readmanager.css";
import AssetsCount from "./AssetsCount/AssetsCount";
import ReadCryptoAssets from "./AssetsCrypto/AssetsCryptoRead";
import Allowedchain from "@/pages/AssetRead/AssetsallowedChainIds /AssetsAllowedchain"
import IsWhiteListed from "./AssetsWhiteListed/Whitelisted"
import MarketOpen from "./MarketOpen/MarketOpen"
import Owner from "./Owner/Owner"
import GetMinLiquidityRequiredForExecution from "./MinliquidityReqExe/MinLiqExe"
import Deviaton from "./Deviation/Deviation";
import AssetPricefromMarket from "./AssetPriceFromMarket/PriceFromMarket";


const ReadAssetsManager = () => {
  

  return (
    <div className="read-assets-container">
      <h1>Read Assets Manager</h1>
      <Owner/>
      <AssetsCount/>
      <ReadCryptoAssets/>
       <Allowedchain/>
       <IsWhiteListed/>
       <MarketOpen/>
       <GetMinLiquidityRequiredForExecution/>
       <Deviaton/>
       <AssetPricefromMarket/>
      
    </div>
  );
};

export default ReadAssetsManager;

