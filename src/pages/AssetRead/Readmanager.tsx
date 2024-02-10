"use client";

import "./Readmanager.css";
import AssetsCount from "./AssetsCount/AssetsCount";
import ReadCryptoAssets from "./AssetsCrypto/AssetsCryptoRead";

const ReadAssetsManager = () => {
  

  return (
    <div className="read-assets-container">
      <h1>Read Assets Manager</h1>
      <AssetsCount/>
      <ReadCryptoAssets/>
    </div>
  );
};

export default ReadAssetsManager;

