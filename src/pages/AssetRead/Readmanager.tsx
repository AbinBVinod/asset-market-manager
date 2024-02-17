"use client";

import "./Readmanager.css";
import AssetsCount from "./AssetsCount/AssetsCount";
import ReadCryptoAssets from "./AssetsCrypto/AssetsCryptoRead";
import Allowedchain from "@/pages/AssetRead/AssetsallowedChainIds /AssetsAllowedchain";
import IsWhiteListed from "./AssetsWhiteListed/Whitelisted";
import MarketOpen from "./MarketOpen/MarketOpen";
import Owner from "./Owner/Owner";
import GetMinLiquidityRequiredForExecution from "./MinliquidityReqExe/MinLiqExe";
import Deviaton from "./Deviation/Deviation";
import AssetPricefromMarket from "./AssetPriceFromMarket/PriceFromMarket";

const ReadAssetsManager = () => {
  return (
    <div className="read-assets-container">
      <h1>Read Assets Manager</h1>

       <div className="static-data-cont"> 
       <div className="owner-cont">
        <Owner />
      </div>
      <div className="assetcount-cont">
        <AssetsCount />
      </div>

      <div className="readcryptoassets-cont">
        <ReadCryptoAssets />
      </div>
       </div>
      


      <div className="allowedchains-cont">
        <Allowedchain />
      </div>
      <div className="iswhitelisted-cont">
        <IsWhiteListed />
      </div>
      <div className="marketopen-cont">
        <MarketOpen />
      </div>
      <div className="getminliq-cont">
        <GetMinLiquidityRequiredForExecution />
      </div>
      <div className="deviaton-cont">
        <Deviaton />
      </div>
      <div className="assetprice-cont">
        <AssetPricefromMarket />
      </div>
    </div>
  );
};

export default ReadAssetsManager;
