import * as React from "react";
import { useState } from "react";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { abi } from "@/lib/Abi/Asset"; 
import adct from "./Addcrypto.module.css"; 

export default function AddCrypto() {
  const [cryptoId, setCryptoId] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { data: hash, error: writeError, isPending, writeContract } = useWriteContract()
  
  const id = parseInt(cryptoId, 10);

  const cryptoProps = {
    id,
    minLiquidityRequiredForExecution: [100], 
    isWhitelisted: true, 
    chainIdAllowed: [1], 
    assetAddressByChainId: ["0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43"], 
    TOKEN_DECIMALS_PRECISION: 6, 
    TOKEN_PRICE_PRECISION: 6, 
    isIsolatedPoolAllowed: true, 
    isSharedPoolAllowed: true, 
    isDecentralisedSourceEnabled: true,
    isCentralisedSourceEnabled: true, 
    tradeProps: {
      isShortable: true,
      isStable: true,
      isLongable: true,
      isCollateral: true,
      isReference: true,
    },
    marketProps: {
      isSwapEnabled: true,
      isMarginTradingEnabled: true,
      isLimitOrderBookEnabled: true,
      isExternalLiquidityEnabled: true,
    },
    riskProps: {
      maxLeverageFactor: 10,
      positionSizeReserveFactor: 10,
      MAXIMUM_POSITION_SIZE_PER_MARKET: true,
      MAX_POSITION_PNL_FACTOR: 10,
      MAX_GLOBAL_PNL_FACTOR: 10,
    },
  };

  async function addCryptoAssets(e:any) {
    e.preventDefault();
    if (!cryptoId) {
      console.error("Crypto ID is undefined or empty.");
      setIsError(true);
      setErrorMessage("Crypto ID cannot be empty.");
      return;
    }

    console.log("Attempting to add crypto asset with ID:", cryptoId); 

    try {
      const tx = await writeContract({

        address: "0xc10a62a740A50BC9bd7c444bb98d3bA1FF888da0",
        abi : abi,
        functionName: "addCryptoAsset",
        args: [cryptoProps],
      });
      console.log("Transaction sent, hash:", tx.hash);
    } catch (error) {
      console.error("Error adding crypto asset:", error);
      setIsError(true);
      setErrorMessage("Failed to add crypto asset. Error: " + error.message);
    }
  }

  React.useEffect(() => {
    if (writeError) {
      console.error("writeError:", writeError.message); 
      setIsError(true);
      setErrorMessage("Contract write error: " + writeError.message);
    }
  }, [writeError]);

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  React.useEffect(() => {
    if (isConfirmed) {
      console.log("Transaction confirmed!");
    }
  }, [isConfirmed]);

  return (
    <>
       <div className={adct.cont}>
        <h1 className={adct.heading}>Add Crypto</h1>
        {isError && <p className="error">{errorMessage}</p>}
        <form onSubmit={addCryptoAssets}>
          <input
            type="text"
            placeholder="Enter Crypto Asset ID"
            value={cryptoId}
            onChange={(e) => setCryptoId(e.target.value)}
            required 
          />
          <button type="submit" disabled={isPending || isConfirming}>
            {isPending || isConfirming ? "Confirming..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}
