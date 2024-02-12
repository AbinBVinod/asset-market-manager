import * as React from "react";
import { useState } from "react";
import { useWriteContract } from "wagmi";
import { abi } from "@/lib/Abi/Asset";
import adct from "./Addcrypto.module.css";
import { toast } from "sonner";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AddCrypto() {
  const [id, setId] = useState("1");
  // const [cryptoId, setCryptoId] = useState("1");
  const [
    minLiquidityRequiredForExecution,
    setMinLiquidityRequiredForExecution,
  ] = useState(100);
  const [isWhitelisted, setIsWhitelisted] = useState(true);
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

  const { writeContract } = useWriteContract();

  const addCryptoAsset = async (e:any) => {
    e.preventDefault();
    setIsPending(true);

    const cryptoProps = [
      id,
      [minLiquidityRequiredForExecution],
      isWhitelisted,
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

    console.log(cryptoProps);

    try {
      const tx = await writeContract({
        address: "0xc10a62a740A50BC9bd7c444bb98d3bA1FF888da0",
        abi: abi,
        functionName: "addCryptoAsset",
        args: [cryptoProps],
      });

      setId("");
      setIsPending(false);
    } catch (error:any) {
      setIsError(true);
      setErrorMessage("Failed to add crypto asset. Error: " + error.message);
      setIsPending(false);
    }
  };

  return (
    <>
      <div className={adct.cont}>
        <h1 className={adct.heading}>Add Crypto</h1>
        {isError && <p className="error">{errorMessage}</p>}
        <form className={adct.csts} onSubmit={addCryptoAsset}>
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

          <label htmlFor="TOKEN_PRICE_PRECISION">TOKEN_PRICE_PRECISION:</label>
          <input
            type="text"
            id="TOKEN_PRICE_PRECISION"
            value={TOKEN_PRICE_PRECISION}
            onChange={(e) => setTOKEN_PRICE_PRECISION(e.target.value)}
          />

          {/* isIsolatedPoolAllowed  */}

          <label htmlFor="isIsolatedPoolAllowed">isIsolatedPoolAllowed:</label>
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
            onChange={(e) => setIsDecentralisedSourceEnabled(e.target.checked)}
          />
          {/* isCentralisedSourceEnabled  */}

          <label htmlFor="isCentralisedSourceEnabled">
            isCentralisedSourceEnabled:
          </label>
          <input
            type="checkbox"
            id="isCentralisedSourceEnabled"
            checked={isCentralisedSourceEnabled}
            onChange={(e) => setIsCentralisedSourceEnabled(e.target.checked)}
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
            onChange={(e) => setIsExternalLiquidityEnabled(e.target.checked)}
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
          <label htmlFor="MAX_GLOBAL_PNL_FACTOR">Max Global PNL Factor:</label>
          <input
            type="number"
            id="MAX_GLOBAL_PNL_FACTOR"
            value={MAX_GLOBAL_PNL_FACTOR}
            onChange={(e) => setMAX_GLOBAL_PNL_FACTOR(parseInt(e.target.value))}
          />

          {/* Submit Button */}
          <Button
            className={adct.button}
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
    </>
  );
}
