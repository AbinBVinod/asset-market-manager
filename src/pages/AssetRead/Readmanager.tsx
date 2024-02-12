"use client";

import "./Readmanager.css";
import AssetsCount from "./AssetsCount/AssetsCount";
import ReadCryptoAssets from "./AssetsCrypto/AssetsCryptoRead";
import Allowedchain from "@/pages/AssetRead/AssetsallowedChainIds /AssetsAllowedchain"
import IsWhiteListed from "./AssetsWhiteListed/Whitelisted"

const ReadAssetsManager = () => {
  

  return (
    <div className="read-assets-container">
      <h1>Read Assets Manager</h1>
      <AssetsCount/>
      <ReadCryptoAssets/>
       <Allowedchain/>
       <IsWhiteListed/>
    </div>
  );
};

export default ReadAssetsManager;

