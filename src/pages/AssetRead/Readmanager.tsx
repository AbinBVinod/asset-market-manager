"use client";

import "./Readmanager.css";
import AssetsCount from "./AssetsCount/AssetsCount";
import ReadCryptoAssets from "./AssetsCrypto/AssetsCryptoRead";
import Allowedchain from "@/pages/AssetRead/AssetsallowedChainIds /AssetsAllowedchain"
import IsWhiteListed from "./AssetsWhiteListed/Whitelisted"
import MarketOpen from "./MarketOpen/MarketOpen"
import Owner from "./Owner/Owner"

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
      
    </div>
  );
};

export default ReadAssetsManager;

