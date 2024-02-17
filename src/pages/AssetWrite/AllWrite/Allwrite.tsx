import alw from "./Allwrite.module.css";

import * as React from "react";
import { useState } from "react";
import { useSwitchAccount, useWriteContract } from "wagmi";
import { abi } from "@/lib/Abi/Asset";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Allwrite = () => {
  const [id, setId] = useState("1");
  const [
    minLiquidityRequiredForExecution,
    setMinLiquidityRequiredForExecution,
  ] = useState(100);
  const [isWhitelisted, setIsWhitelisted] = useState(true);
  const [assetTickName, setassetTickName] = useState("");
  const [chainIdAllowed, setChainIdAllowed] = useState("1");
  const [assetAddressByChainId, setAssetAddressByChainId] = useState(
    "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43"
  );
  const [TOKEN_DECIMALS_PRECISION, setTOKEN_DECIMALS_PRECISION] = useState("1");
  const [TOKEN_PRICE_PRECISION, setTOKEN_PRICE_PRECISION] = useState("1");
  const [isIsolatedPoolAllowed, setIsIsolatedPoolAllowed] = useState(true);
  const [isSharedPoolAllowed, setIsSharedPoolAllowed] = useState(true);
  const [isDecentralisedSourceEnabled, setIsDecentralisedSourceEnabled] =
    useState(true);
  const [isCentralisedSourceEnabled, setIsCentralisedSourceEnabled] =
    useState(true);
  const [isShortable, setIsShortable] = useState(true);
  const [isStable, setIsStable] = useState(true);
  const [isLongable, setIsLongable] = useState(true);
  const [isCollateral, setIsCollateral] = useState(true);
  const [isReference, setIsReference] = useState(true);
  const [isSwapEnabled, setIsSwapEnabled] = useState(true);
  const [isMarginTradingEnabled, setIsMarginTradingEnabled] = useState(true);
  const [isLimitOrderBookEnabled, setIsLimitOrderBookEnabled] = useState(true);
  const [isExternalLiquidityEnabled, setIsExternalLiquidityEnabled] =
    useState(true);
  const [maxLeverageFactor, setMaxLeverageFactor] = useState(10);
  const [positionSizeReserveFactor, setPositionSizeReserveFactor] =
    useState(10);
  const [
    MAXIMUM_POSITION_SIZE_PER_MARKET,
    setMAXIMUM_POSITION_SIZE_PER_MARKET,
  ] = useState(true);
  const [MAX_POSITION_PNL_FACTOR, setMAX_POSITION_PNL_FACTOR] = useState(10);
  const [MAX_GLOBAL_PNL_FACTOR, setMAX_GLOBAL_PNL_FACTOR] = useState(10);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  //for transfer owner
  const [ownerAddress, setOwnerAddress] = useState("");

  //for update whitelisted status
  const [assetIdwhite, setAssetIdwhite] = useState("");
  const [updateisWhitelisted, setUpdateisWhitelisted] = useState("");

  //for update trade props stable
  const [assedIdtradepopstable, setAssedIdtradepopstable] = useState("");
  const [updateStablepool, setUpdateStablepool] = useState("");

  // for update trade props shortable
  const [assetIDtradepropsSortable, setAssetIDtradepropsSortable] =
    useState("");
  const [updateShortable, setUpdateShortable] = useState("");

  // for update trade props reference
  const [assetitradepropsRefernce, setAssetIDtradepropsRefernce] = useState("");
  const [updaeRefernceTp, setUpdateRefernceTp] = useState("");

  // for update trade props longable
  const [assetidtradepropsLongable, setAssetidtradepropsLongable] =
    useState("");
  const [updateLongbleTp, setUpdateLongable] = useState("");

  // for update trade props collateral
  const [assetIdtradepropsCollateral, setAssetIdtradepropsCollateral] =
    useState("");
  const [updateCollateraltp, setCollateraltp] = useState("");

  //for update timed market assets reference asset
   const [assetidTmaRa , setassetidTmaRa ] = useState("");
   const [referenceAsset , setreferenceAsset ] = useState("");
  
   //for update timed market asset market timing
   const [assetIDtmamt , setassetIDtmamt] = useState("");
   const [ marketOtime , setmarketOtime] = useState("");
   const [marketOdur , setmarketOdur] = useState("");

   //for update orcale source status
   const [ assetIdOrSosa , setassetIdOrSosa ] =  useState ("");
   const [ deceNebaleOSS , setdeceNebaleOSS  ] = useState ("");
   const [ centerliOSS , setcenterliOSS ] = useState ("");

   //for update min liqudity
   const [ assetIdMinLiq , setassetIdMinLiq] = useState("");
   const [ minliqreqExc , setminliqreqExc] = useState("");

   // for update assets risk facors
   const [ assetsIdUpAsRiFa , setassetsIdUpAsRiFa  ] = useState("");
   const [ maxLevlFac , setmaxLevlFac  ] = useState("");
   const [ postSizResFat , setpostSizResFat ] = useState("");
   const [ maxPossizePma , setmaxPossizePma ] = useState("");
   const [ maxpospnlf , setmaxpospnlf ] = useState("");
   const [ maxglobapnlFa , setmaxglobapnlFa  ] = useState("");

 

  //for wagmi write contact
  const { data: hash, error: writeError, writeContract } = useWriteContract();

  //for addcrytpo
  const addCryptoAsset = async (e: any) => {
    e.preventDefault();
    setIsPending(true);

    const cryptoProps = [
      id,
      [minLiquidityRequiredForExecution],
      isWhitelisted,
      assetTickName,
      [chainIdAllowed],
      [assetAddressByChainId],
      TOKEN_DECIMALS_PRECISION,
      TOKEN_PRICE_PRECISION,
      isIsolatedPoolAllowed,
      isSharedPoolAllowed,
      isDecentralisedSourceEnabled,
      isCentralisedSourceEnabled,
      [isShortable, isStable, isLongable, isCollateral, isReference],
      [
        isSwapEnabled,
        isMarginTradingEnabled,
        isLimitOrderBookEnabled,
        isExternalLiquidityEnabled,
      ],
      [
        maxLeverageFactor,
        positionSizeReserveFactor,
        MAXIMUM_POSITION_SIZE_PER_MARKET,
        MAX_POSITION_PNL_FACTOR,
        MAX_GLOBAL_PNL_FACTOR,
      ],
    ];
    try {
      const tx = await writeContract({
        address: "0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE",
        abi: abi,
        functionName: "addCryptoAsset",
        args: [cryptoProps],
      });

      setId("");
      setIsPending(false);
    } catch (error: any) {
      setIsError(true);
      setErrorMessage("Failed to add crypto asset. Error: " + error.message);
      setIsPending(false);
    }
  };
  // for renounce owner
  async function WriteRenounceOwner() {
    try {
      await writeContract({
        address: "0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE",
        abi: abi,
        functionName: "renounceOwnership",
      });
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  }
  // for tranferowner
  async function transferOwner(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await writeContract({
        address: "0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE",
        abi: abi,
        functionName: "transferOwnership",
        args: [ownerAddress],
      });
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  }
  // for update whitelisted status
  async function upwhiteliststatus(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await writeContract({
        address: "0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE",
        abi: abi,
        functionName: "updateWhitelistedStatus",
        args: [
          parseInt(assetIdwhite),
          updateisWhitelisted.toLowerCase() === "true",
        ],
      });
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  }
  // for update trade prpos stable
  async function uptradepropsstable(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await writeContract({
        address: "0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE",
        abi: abi,
        functionName: "updateTradePropsStable",
        args: [
          parseInt(assedIdtradepopstable),
          updateStablepool.toLowerCase() === "true",
        ],
      });
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  }

  //for udpate trade props shortable
  async function updatetradepropsshortable(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    try {
      await writeContract({
        address: "0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE",
        abi: abi,
        functionName: "updateTradePropsShortable",
        args: [parseInt(assetIDtradepropsSortable),updateShortable.toLowerCase() == "true",],
      });
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  }

  //for udpate trade props refernce
  async function updatetradepropsRefernce(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await writeContract({
        address: "0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE",
        abi: abi,
        functionName: "updateTradePropsReference",
        args: [
          parseInt(assetitradepropsRefernce),
          updaeRefernceTp.toLowerCase() == "true",
        ],
      });
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  }

  //for udpate trade props longable
  async function updatetradepropsLongable(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await writeContract({
        address: "0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE",
        abi: abi,
        functionName: "updateTradePropsLongable",
        args: [
          parseInt(assetidtradepropsLongable),
          updateLongbleTp.toLowerCase() == "true",
        ],
      });
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  }

  //for update trade props collateral
  async function updatetradepropscollateral(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    try {
      await writeContract({
        address: "0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE",
        abi: abi,
        functionName: "updateTradePropsCollateral",
        args: [
          parseInt(assetIdtradepropsCollateral),
          updateCollateraltp.toLowerCase() == "true",
        ],
      });
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  }

  // for update Timed Market Asset Reference Asset
   async function udpateTimedmarketassetReferenceAsset(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    try {
      await writeContract({
        address : '0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE',
        abi : abi,
        functionName : "updateTimedMarketAssetReferenceAsset",
        args : [parseInt(assetidTmaRa) , referenceAsset ]
      })
    }
    catch (error:any) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  }

  // for update Timed Market Asset Market timing
   async function updateTimedMarketAssetMarketTiming(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    try {
      await writeContract ({
        address : '0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE',
        abi : abi,
        functionName : 'updateTimedMarketAssetMarketTimings',
        args: [parseInt(assetIDtmamt), parseInt(marketOtime), parseInt(marketOdur) ]
      })

    }
    catch(error) {
    }
   }

   //for update orace source status
   async function updateOracleSourceStatus(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    try {
      await writeContract ({
        address : '0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE',
        abi : abi,
        functionName : 'updateOracleSourceStatus',
        args: [assetIDtmamt, marketOtime, marketOdur, ]
      })
  } catch (error: any) {
    setIsError(true);
    setErrorMessage(error.message);
  }
  }
  
  // for update min liq
  async function updateMinLiquidExc (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    try {
      await writeContract ({
        address : '0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE',
        abi : abi,
        functionName : 'updateMinLiquidity',
        args: [assetIdMinLiq, [minliqreqExc],]
      })
  } catch (error: any) {
    setIsError(true);
    setErrorMessage(error.message);
  }
  }

  //for update asset rish factor
  async function updateassetsRiskFactor(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    try {
      await writeContract ({
        address : '0xFcEF7A7180f34D1685449D9BC08ed6aC02e157FE',
        abi : abi,
        functionName : 'updateAssetRiskFactors',
        args: [parseInt(assetsIdUpAsRiFa), parseInt(maxLevlFac), parseInt(postSizResFat), maxPossizePma.toLowerCase() === "true", parseInt(maxpospnlf), parseInt(maxglobapnlFa)]
      })
  } catch (error: any) {
    setIsError(true);
    setErrorMessage(error.message);
  }
  }
 

  //toast messages
  const ToastShacn = () => {
    toast("Wait For MetaMask");
  };

  const ToastAndContract = () => {
    WriteRenounceOwner();
    ToastShacn();
  };

  return (
    <>
      <div className={alw.main}>
        <div className={alw.addcrypto}>
          <div className={alw.cont}>
            <h1 className={alw.heading}>Add Crypto</h1>
            {isError && <p className="error">{errorMessage}</p>}
            <form className={alw.csts} onSubmit={addCryptoAsset}>
              {/* Id */}
              <label htmlFor="id">Id:</label>
              <input
                type="number"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />

              {/* Chain Id Allowed */}
              <label htmlFor="chainIdAllowed">Chain Id Allowed:</label>
              <input
                type="text"
                id="chainIdAllowed"
                value={chainIdAllowed}
                onChange={(e) => setChainIdAllowed(e.target.value)}
              />

              {/* Is Whitelisted */}
              <label htmlFor="isWhitelisted">Is Whitelisted:</label>
              <Input
                type="checkbox"
                id="isWhitelisted"
                checked={isWhitelisted}
                onChange={(e) => setIsWhitelisted(e.target.checked)}
              />

              {/* assetTickName */}
              <label htmlFor="assetTickName">assetTickName</label>
              <Input
                type="text"
                id="assetTickName"
                value={assetTickName}
                onChange={(e) => setassetTickName(e.target.value)}
              />

              {/* Min Liquidity Required For Execution */}
              <label htmlFor="minLiquidityRequiredForExecution">
                Min Liquidity Required For Execution:
              </label>
              <input
                type="number"
                id="minLiquidityRequiredForExecution"
                value={minLiquidityRequiredForExecution}
                onChange={(e) =>
                  setMinLiquidityRequiredForExecution(parseInt(e.target.value))
                }
                required
              />

              {/* Asset Address By Chain Id */}
              <label htmlFor="assetAddressByChainId">
                Asset Address By Chain Id:
              </label>
              <input
                type="text"
                id="assetAddressByChainId"
                value={assetAddressByChainId}
                onChange={(e) => setAssetAddressByChainId(e.target.value)}
              />

              {/* TOKEN_DECIMALS_PRECISION  */}

              <label htmlFor="TOKEN_DECIMALS_PRECISION">
                TOKEN_DECIMALS_PRECISION:
              </label>
              <input
                type="text"
                id="TOKEN_DECIMALS_PRECISION"
                value={TOKEN_DECIMALS_PRECISION}
                onChange={(e) => setTOKEN_DECIMALS_PRECISION(e.target.value)}
              />

              {/* TOKEN_PRICE_PRECISION  */}

              <label htmlFor="TOKEN_PRICE_PRECISION">
                TOKEN_PRICE_PRECISION:
              </label>
              <input
                type="text"
                id="TOKEN_PRICE_PRECISION"
                value={TOKEN_PRICE_PRECISION}
                onChange={(e) => setTOKEN_PRICE_PRECISION(e.target.value)}
              />

              {/* isIsolatedPoolAllowed  */}

              <label htmlFor="isIsolatedPoolAllowed">
                isIsolatedPoolAllowed:
              </label>
              <input
                type="checkbox"
                id="isIsolatedPoolAllowed"
                checked={isIsolatedPoolAllowed}
                onChange={(e) => setIsIsolatedPoolAllowed(e.target.checked)}
              />
              {/* isSharedPoolAllowed  */}

              <label htmlFor="isSharedPoolAllowed">isSharedPoolAllowed:</label>
              <input
                type="checkbox"
                id="isSharedPoolAllowed"
                checked={isSharedPoolAllowed}
                onChange={(e) => setIsSharedPoolAllowed(e.target.checked)}
              />
              {/* isDecentralisedSourceEnabled  */}

              <label htmlFor="isDecentralisedSourceEnabled">
                isDecentralisedSourceEnabled:
              </label>
              <input
                type="checkbox"
                id="isDecentralisedSourceEnabled"
                checked={isDecentralisedSourceEnabled}
                onChange={(e) =>
                  setIsDecentralisedSourceEnabled(e.target.checked)
                }
              />
              {/* isCentralisedSourceEnabled  */}

              <label htmlFor="isCentralisedSourceEnabled">
                isCentralisedSourceEnabled:
              </label>
              <input
                type="checkbox"
                id="isCentralisedSourceEnabled"
                checked={isCentralisedSourceEnabled}
                onChange={(e) =>
                  setIsCentralisedSourceEnabled(e.target.checked)
                }
              />

              {/* Trade_props */}

              <label htmlFor="isShortable">Is Shortable:</label>
              <input
                type="checkbox"
                id="isShortable"
                checked={isShortable}
                onChange={(e) => setIsShortable(e.target.checked)}
              />

              <label htmlFor="isStable">Is Stable:</label>
              <input
                type="checkbox"
                id="isStable"
                checked={isStable}
                onChange={(e) => setIsStable(e.target.checked)}
              />
              <label htmlFor="isLongable">Is Longable:</label>
              <input
                type="checkbox"
                id="isLongable"
                checked={isLongable}
                onChange={(e) => setIsLongable(e.target.checked)}
              />
              <label htmlFor="isCollateral">Is Collateral:</label>
              <input
                type="checkbox"
                id="isCollateral"
                checked={isCollateral}
                onChange={(e) => setIsCollateral(e.target.checked)}
              />
              <label htmlFor="isReference">Is Reference:</label>
              <input
                type="checkbox"
                id="isReference"
                checked={isReference}
                onChange={(e) => setIsReference(e.target.checked)}
              />

              {/* Market Props */}
              <label htmlFor="isSwapEnabled">Is Swap Enabled:</label>
              <input
                type="checkbox"
                id="isSwapEnabled"
                checked={isSwapEnabled}
                onChange={(e) => setIsSwapEnabled(e.target.checked)}
              />
              <label htmlFor="isMarginTradingEnabled">
                Is Margin Trading Enabled:
              </label>
              <input
                type="checkbox"
                id="isMarginTradingEnabled"
                checked={isMarginTradingEnabled}
                onChange={(e) => setIsMarginTradingEnabled(e.target.checked)}
              />
              <label htmlFor="isLimitOrderBookEnabled">
                Is Limit Order Book Enabled:
              </label>
              <input
                type="checkbox"
                id="isLimitOrderBookEnabled"
                checked={isLimitOrderBookEnabled}
                onChange={(e) => setIsLimitOrderBookEnabled(e.target.checked)}
              />
              <label htmlFor="isExternalLiquidityEnabled">
                Is External Liquidity Enabled:
              </label>
              <input
                type="checkbox"
                id="isExternalLiquidityEnabled"
                checked={isExternalLiquidityEnabled}
                onChange={(e) =>
                  setIsExternalLiquidityEnabled(e.target.checked)
                }
              />

              {/* Risk Props */}
              <label htmlFor="maxLeverageFactor">Max Leverage Factor:</label>
              <input
                type="number"
                id="maxLeverageFactor"
                value={maxLeverageFactor}
                onChange={(e) => setMaxLeverageFactor(parseInt(e.target.value))}
              />
              <label htmlFor="positionSizeReserveFactor">
                Position Size Reserve Factor:
              </label>
              <input
                type="number"
                id="positionSizeReserveFactor"
                value={positionSizeReserveFactor}
                onChange={(e) =>
                  setPositionSizeReserveFactor(parseInt(e.target.value))
                }
              />
              <label htmlFor="MAXIMUM_POSITION_SIZE_PER_MARKET">
                Maximum Position Size Per Market:
              </label>
              <input
                type="checkbox"
                id="MAXIMUM_POSITION_SIZE_PER_MARKET"
                checked={MAXIMUM_POSITION_SIZE_PER_MARKET}
                onChange={(e) =>
                  setMAXIMUM_POSITION_SIZE_PER_MARKET(e.target.checked)
                }
              />
              <label htmlFor="MAX_POSITION_PNL_FACTOR">
                Max Position PNL Factor:
              </label>
              <input
                type="number"
                id="MAX_POSITION_PNL_FACTOR"
                value={MAX_POSITION_PNL_FACTOR}
                onChange={(e) =>
                  setMAX_POSITION_PNL_FACTOR(parseInt(e.target.value))
                }
              />
              <label htmlFor="MAX_GLOBAL_PNL_FACTOR">
                Max Global PNL Factor:
              </label>
              <input
                type="number"
                id="MAX_GLOBAL_PNL_FACTOR"
                value={MAX_GLOBAL_PNL_FACTOR}
                onChange={(e) =>
                  setMAX_GLOBAL_PNL_FACTOR(parseInt(e.target.value))
                }
              />

              {/* Submit Button */}
              <Button
                className={alw.button}
                type="submit"
                disabled={isPending}
                onClick={() =>
                  toast("Transaction  Submited", {
                    description: "Wait for MetaMask",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })
                }
              >
                {isPending ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
          {/* for renounce ownership */}
          <div className={alw.ronw}>
            <h1> RenounceOwnership </h1>
            <button onClick={ToastAndContract}>Write</button>
          </div>
        </div>
      </div>
      <div className={alw.twonewinputaligh}>
        <div className={alw.new}>
          {/* for tranfer owner */}
          <div className={alw.trformall}>
            <div className={alw.contTranf}>
              <h3>Transfer Owner</h3>
              {isError && <p className="error">{errorMessage}</p>}
              <form className={alw.tform} onSubmit={transferOwner}>
                <input
                  type="text"
                  placeholder="New Owner Address"
                  value={ownerAddress}
                  onChange={(e) => setOwnerAddress(e.target.value)}
                />
                <button type="submit" disabled={isPending}>
                  {isPending ? "Confirming..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
          {/* for updated whitelisted */}
          <div className={alw.upwhsta}>
            <h3> Update Whitelisted Status</h3>
            <form className={alw.upws} onSubmit={upwhiteliststatus}>
              <Input
                type="number"
                placeholder="Enter asset id"
                value={assetIdwhite}
                onChange={(e) => setAssetIdwhite(e.target.value)}
              />
              <Input
                type="boolean"
                placeholder="Enter True or Flase"
                value={updateisWhitelisted}
                onChange={(e) => setUpdateisWhitelisted(e.target.value)}
              />
              <Button onClick={ToastShacn} type="submit" disabled={isPending}>
                {isPending ? "Confirming..." : "Submit"}
              </Button>
            </form>
          </div>
          {/* for updated tradeprops stable */}
          <div className={alw.utps}>
            <h3> Update Trade Props Stable</h3>
            <form className={alw.upws} onSubmit={uptradepropsstable}>
              <Input
                type="number"
                placeholder="Enter asset id"
                value={assedIdtradepopstable}
                onChange={(e) => setAssedIdtradepopstable(e.target.value)}
              />
              <Input
                type="boolean"
                placeholder="Enter True or Flase"
                value={updateStablepool}
                onChange={(e) => setUpdateStablepool(e.target.value)}
              />
              <Button onClick={ToastShacn} type="submit" disabled={isPending}>
                {isPending ? "Confirming..." : "Submit"}
              </Button>
            </form>
          </div>
          {/* for updated tradeprops shortable */}
          <div className={alw.utpshort}>
            <h3> Update Trade Props Shortable</h3>
            <form className={alw.upws} onSubmit={updatetradepropsshortable}>
              <Input
                type="number"
                placeholder="Enter asset id"
                value={assetIDtradepropsSortable}
                onChange={(e) => setAssetIDtradepropsSortable(e.target.value)}
              />
              <Input
                type="boolean"
                placeholder="Enter True or Flase"
                value={updateShortable}
                onChange={(e) => setUpdateShortable(e.target.value)}
              />
              <Button onClick={ToastShacn} type="submit" disabled={isPending}>
                {isPending ? "Confirming..." : "Submit"}
              </Button>
            </form>
          </div>
          {/* for updated tradeprops refernce */}
          <div className={alw.utpref}>
            <h3> Update Trade Props Reference</h3>
            <form className={alw.upws} onSubmit={updatetradepropsRefernce}>
              <Input
                type="number"
                placeholder="Enter asset id"
                value={assetitradepropsRefernce}
                onChange={(e) => setAssetIDtradepropsRefernce(e.target.value)}
              />
              <Input
                type="boolean"
                placeholder="Enter True or Flase"
                value={updaeRefernceTp}
                onChange={(e) => setUpdateRefernceTp(e.target.value)}
              />
              <Button onClick={ToastShacn} type="submit" disabled={isPending}>
                {isPending ? "Confirming..." : "Submit"}
              </Button>
            </form>
          </div>
          {/* for updated tradeprops Longable */}
          <div className={alw.utplon}>
            <h3> Update Trade Props Longable</h3>
            <form className={alw.upws} onSubmit={updatetradepropsLongable}>
              <Input
                type="number"
                placeholder="Enter asset id"
                value={assetidtradepropsLongable}
                onChange={(e) => setAssetidtradepropsLongable(e.target.value)}
              />
              <Input
                type="boolean"
                placeholder="Enter True or Flase"
                value={updateLongbleTp}
                onChange={(e) => setUpdateLongable(e.target.value)}
              />
              <Button onClick={ToastShacn} type="submit" disabled={isPending}>
                {isPending ? "Confirming..." : "Submit"}
              </Button>
            </form>
          </div>
          {/* for updated tradeprops collateral */}
          <div className={alw.utpcolat}>
            <h3> Update Trade Props Collateral</h3>
            <form className={alw.upws} onSubmit={updatetradepropscollateral}>
              <Input
                type="number"
                placeholder="Enter asset id"
                value={assetIdtradepropsCollateral}
                onChange={(e) => setAssetIdtradepropsCollateral(e.target.value)}
              />
              <Input
                type="boolean"
                placeholder="Enter True or Flase"
                value={updateCollateraltp}
                onChange={(e) => setCollateraltp(e.target.value)}
              />
              <Button onClick={ToastShacn} type="submit" disabled={isPending}>
                {isPending ? "Confirming..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>

        <div className={alw.newtwo}>

          {/* for update timed asset refernce assets */}
          <div className={alw.utara}>
            <h3> Update Timed Market Asset Reference Asset</h3>
            <form className={alw.upws} onSubmit={udpateTimedmarketassetReferenceAsset}>
              <Input
                type="number"
                placeholder="Enter asset id"
                value={assetidTmaRa}
                onChange={(e) => setassetidTmaRa(e.target.value)}
              />
              <Input
                type="text"
                placeholder="string"
                value={referenceAsset}
                onChange={(e) => setreferenceAsset(e.target.value)}
              />
              <Button onClick={ToastShacn} type="submit" disabled={isPending}>
                {isPending ? "Confirming..." : "Submit"}
              </Button>
            </form>
          </div>

          {/* for update timed asset market timeings */}
           <div className={alw.utamt}>
           <h3> Update Timed Market Asset Market Timing</h3>
            <form className={alw.upws} onSubmit={updateTimedMarketAssetMarketTiming}>
              <Input
                type="number"
                placeholder="Enter asset id"
                value={assetIDtmamt}
                onChange={(e) => setassetIDtmamt(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Enter TImestamp"
                value={marketOtime}
                onChange={(e) => setmarketOtime(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Enter Open Duration"
                value={marketOdur}
                onChange={(e) => setmarketOdur(e.target.value)}
              />
              <Button onClick={ToastShacn} type="submit" disabled={isPending}>
                {isPending ? "Confirming..." : "Submit"}
              </Button>
            </form>
           </div>

            {/* for update orcale source staus */}
           <div className={alw.osstat}>
           <h3> Update Orcale Source Status</h3>
            <form className={alw.upws} onSubmit={updateOracleSourceStatus}>
              <Input
                type="number"
                placeholder="_assetId"
                value={assetIdOrSosa}
                onChange={(e) => setassetIdOrSosa(e.target.value)}
              />
              <Input
                type="bool"
                placeholder="_isDecentralisedEnabled bool"
                value={deceNebaleOSS}
                onChange={(e) => setdeceNebaleOSS(e.target.value)}
              />
              <Input
                type="bool"
                placeholder="_isCentralisedEnabled bool"
                value={centerliOSS}
                onChange={(e) => setcenterliOSS(e.target.value)}
              />
              <Button onClick={ToastShacn} type="submit" disabled={isPending}>
                {isPending ? "Confirming..." : "Submit"}
              </Button>
            </form>
           </div>

           {/* for update min liquidity */}
           <div className={alw.uMlq}>
           <h3> Update Min liquidity </h3>
            <form className={alw.upws} onSubmit={updateMinLiquidExc}>
              <Input
                type="number"
                placeholder="Enter asset id"
                value={assetIdMinLiq}
                onChange={(e) => setassetIdMinLiq(e.target.value)}
              />
              <Input
                type="number"
                placeholder="_minLiquidityRequiredForExecution"
                value={minliqreqExc}
                onChange={(e) => setminliqreqExc(e.target.value)}
              />
              <Button onClick={ToastShacn} type="submit" disabled={isPending}>
                {isPending ? "Confirming..." : "Submit"}
              </Button>
            </form>
           </div>

            {/* for update asset risk factors */}
            <div className={alw.uAriFa}>
            <h3> Update Assets Risk Factors </h3>
            <form className={alw.upws} onSubmit={updateassetsRiskFactor}>
              <Input
                type="number"
                placeholder="_assetId"
                value={assetsIdUpAsRiFa}
                onChange={(e) => setassetsIdUpAsRiFa(e.target.value)}
              />
              <Input
                type="number"
                placeholder="_maxLeverageFactor"
                value={maxLevlFac}
                onChange={(e) => setmaxLevlFac(e.target.value)}
              />
               <Input
                type="number"
                placeholder="_positionSizeReserveFactor"
                value={postSizResFat}
                onChange={(e) => setpostSizResFat(e.target.value)}
              />
               <Input
                type="bool"
                placeholder="_maxPosSizePerMarket bool"
                value={maxPossizePma}
                onChange={(e) => setmaxPossizePma(e.target.value)}
              />
               <Input
                type="number"
                placeholder="_maxPosPnlFactor"
                value={maxpospnlf}
                onChange={(e) => setmaxpospnlf(e.target.value)}
              />
               <Input
                type="number"
                placeholder="_maxGlobalPnlFactor"
                value={maxglobapnlFa}
                onChange={(e) => setmaxglobapnlFa(e.target.value)}
              />
              <Button onClick={ToastShacn} type="submit" disabled={isPending}>
                {isPending ? "Confirming..." : "Submit"}
              </Button>
            </form>
            </div>

        </div>
      </div>
    </>
  );
};
export default Allwrite;
