import { useEffect, useState } from "react";
import Mkp from "./Market.module.css";
import { getMarketopen } from "@/components/ReadAssets/marketOpen/MarketOpen";
import { Input } from "@/components/ui/input"

const MarketOpen = () => {
  const [isMarketopen, setIsmarketopen] = useState<boolean | undefined>();
  const [argsValue, setArgsValue] = useState<string | number | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (argsValue != undefined) {
          const isMarketopenValue: any = await getMarketopen(argsValue);
          {
            setIsmarketopen(isMarketopenValue);
          }
        } else {
          setIsmarketopen(undefined);
        }
      } catch (error) {
        console.log("Error Fetching data", error);
      }
    };
    fetchData();
  }, [argsValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArgsValue(event.target.value);
  };

  return (
    <>
      <div className={Mkp.main}>
        <Input
          type="number"
          placeholder="enter id"
          value={argsValue}
          onChange={handleInputChange}
        />
        <h1>isMarketOpen : {isMarketopen !== undefined ? isMarketopen.toString() : "Unknown"}</h1>
      </div>
    </>
  );
};



export default MarketOpen;
