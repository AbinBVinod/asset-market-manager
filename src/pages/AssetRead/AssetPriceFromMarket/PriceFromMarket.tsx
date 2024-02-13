import { useEffect, useState } from "react";
import APFM from "./Pricefrommarket.module.css"

import  { getAssetPriceFromMarket } from "@/components/ReadAssets/AssetPriceFromMarket/priceassetmarket"
import { Input } from "@/components/ui/input";


const AssetPriceFromMarket = () => {
  const [assetPrice, setAssetPrice] = useState<string | number>();
  const [argsValue, setArgsValue] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assetPriceFromMarket = await getAssetPriceFromMarket(argsValue);
        setAssetPrice(assetPriceFromMarket);
      } catch (error) {
        console.log("Failed to fetch data", error);
        throw error;
      }
    };

    fetchData();
  }, [argsValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArgsValue(Number(event.target.value));
  };

  return (
    <>
      <div className={APFM.main}>
        <Input
          type="number"
          placeholder="Enter the number"
          value={argsValue}
          onChange={handleInputChange}
        />

        <h1>
          Asset Price From Market:{" "}
          {assetPrice !== undefined ? assetPrice.toString() : "Unknown"}
        </h1>
      </div>
    </>
  );
};

export default AssetPriceFromMarket;