import { useState } from "react";
import Mewm from "./enginestyle.module.css";
import { useWriteContract } from "wagmi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MarketEngine } from "@/lib/Abi/MarketEngine";
import { toast } from "sonner";

const MEWriteManager = () => {
  // Create asset
  const [inAssetId, setInAssetId] = useState("");
  const [LongAssetId, setLongAssetId] = useState("");
  const [ShortAssetId, setShortAssetId] = useState("");
  const [MarketTCm, setMarketTCm] = useState("");
  const [AssetTyp, setAssetTyp] = useState("");

  const {
    data: hash,
    error: writeError,
    isPending,
    writeContract,
  } = useWriteContract();

  async function createMarket(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const args = [
        parseInt(inAssetId), 
        parseInt(LongAssetId), 
        parseInt(ShortAssetId), 
        MarketTCm, 
        AssetTyp
    ];
      console.log("Arguments:", args);
      await writeContract({
        address: "0x2692FC92BE6cA0Ee369F654FfF6346dFA563c150",
        abi: MarketEngine,
        functionName: "createMarket",
        args: args,
      });
    } catch (writeError: any) {
      console.log(writeError.message);
    }
  }

  const ToastShacn = () => {
    toast("Wait For MetaMask");
  };

  return (
    <>
      <div className={Mewm.main}>
        <h1> Write Market-Engine </h1>

        <div className={Mewm.writeall}>
          {/* For Create Market  */}
          <div className={Mewm.CreMarket}>
            <h2> Create Market </h2>

            <form onSubmit={createMarket}>
              <Input
               
                placeholder="Index AssetId []"
                value={inAssetId}
                onChange={(e) => setInAssetId(e.target.value)}
              />

              <Input
             
                placeholder="Long AssetId []"
                value={LongAssetId}
                onChange={(e) => setLongAssetId(e.target.value)}
              />

              <Input
               
                placeholder="Short AssetId []"
                value={ShortAssetId}
                onChange={(e) => setShortAssetId(e.target.value)}
              />

              <Input
                type="string"
                placeholder="Market Type"
                value={MarketTCm}
                onChange={(e) => setMarketTCm(e.target.value)}
              />

              <Input
             
                placeholder="Asset Type"
                value={AssetTyp}
                onChange={(e) => setAssetTyp(e.target.value)}
              />

              <Button type="submit" onClick={ToastShacn}>
                Sumbit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MEWriteManager;
