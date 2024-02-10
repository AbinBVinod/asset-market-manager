"use client";
import React, { useEffect, useState } from "react";
import "./AssetsCryptoRead.css"; 
import { getCryptoAssets } from "@/components/ReadAssets/cryptoAssets/CryptoAssets"; 

const ReadCryptoAssets = () => {
    const [cryptoAssets, setCryptoAssets] = useState([]);
    const [argValue, setArgValue] = useState(1);
  
    useEffect(() => {
      const fetchCryptoAsset = async () => {
        try {
        //   console.log("Fetching assets with argValue:", argValue);
          const assets = await getCryptoAssets(argValue);
        //   console.log("Assets fetched:", assets); 
   
          setCryptoAssets(Array.isArray(assets) ? assets : [assets]);
        } catch (error) {
          console.error("Failed to fetch crypto assets", error);
          setCryptoAssets([]); 
        }
      };
  
      fetchCryptoAsset();
    }, [argValue]);
  
    const handleInputChange = (event) => {
      const newValue = parseInt(event.target.value, 10);
      setArgValue(isNaN(newValue) ? '' : newValue); 
    };
  
    const renderCryptoAssets = () => {
      if (!Array.isArray(cryptoAssets) || cryptoAssets.length === 0) {
        return <div>No data available</div>;
      }
  
      return (
        <div className="crypto-assets-container">
          <h2>CryptoAssets</h2>
          {cryptoAssets.map((asset, index) => (
            <div key={index} className="crypto-asset-item">
              {/* all data */}
              <div><strong>ID: </strong> {asset.id}</div>
              <div><strong>Is Whitelisted: </strong> {asset.isWhitelisted ? 'Yes' : 'No'}</div>
               <div><strong>TOKEN_DECIMALS_PRECISION: </strong> {asset.TOKEN_DECIMALS_PRECISION}</div>
               <div><strong>TOKEN_PRICE_PRECISION: </strong> {asset.TOKEN_PRICE_PRECISION}</div>
               <div><strong>isIsolatedPoolAllowed: </strong> {asset.isIsolatedPoolAllowed}</div>
               <div><strong>isSharedPoolAllowed: </strong> {asset.isSharedPoolAllowed}</div>
               <div><strong>isDecentralisedSourceEnabled: </strong> {asset.isDecentralisedSourceEnabled}</div>
               <div><strong>isCentralisedSourceEnabled:</strong> {asset.isCentralisedSourceEnabled}</div>
               <div><strong>isCollateral: </strong> {asset.tradeProps?.isCollateral }</div>
               <div><strong>isLongable: </strong> {asset.tradeProps?.isLongable}</div>
               <div><strong>isReference: </strong> {asset.tradeProps?.isReference}</div>
               <div><strong>isShortable: </strong> {asset.tradeProps?.isShortable}</div>
               <div><strong>isStable: </strong> {asset.tradeProps?.isStable}</div>
               <div><strong>isSwapEnabled: </strong> {asset.marketProps?.isSwapEnabled}</div>
               <div><strong>isMarginTradingEnabled: </strong> {asset.marketProps?.isMarginTradingEnabled}</div>
               <div><strong>isLimitOrderBookEnabled: </strong> {asset.marketProps?.isLimitOrderBookEnabled}</div>
               <div><strong>isExternalLiquidityEnabled: </strong> {asset.marketProps?.isExternalLiquidityEnabled}</div>
               <div><strong>maxLeverageFactor: </strong> {asset.riskProps?.maxLeverageFactor}</div>
               <div><strong>positionSizeReserveFactor: </strong> {asset.riskProps?.positionSizeReserveFactor}</div>
               <div><strong>MAXIMUM_POSITION_SIZE_PER_MARKET:</strong> {asset.riskProps?.MAXIMUM_POSITION_SIZE_PER_MARKET}</div>
               <div><strong>MAX_POSITION_PNL_FACTOR: </strong> {asset.riskProps?.MAX_POSITION_PNL_FACTOR}</div>
               <div><strong>MAX_GLOBAL_PNL_FACTOR: </strong> {asset.riskProps?.MAX_GLOBAL_PNL_FACTOR}</div>
            </div>
          ))}
        </div>
      );
    };
  
    return (
      <div className="read-crypto-assets-container">
        {renderCryptoAssets()}
        <input
          type="number"
          value={argValue}
          onChange={handleInputChange}
          placeholder="Enter asset number"
        />
      </div>
    );
  };
  
  export default ReadCryptoAssets;
