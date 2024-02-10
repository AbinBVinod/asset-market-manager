import React, { useState} from "react";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  type BaseError,
} from 'wagmi';
import { abi } from "@/lib/Abi/Asset";
import Traow from "./TransferOwner.module.css";

export function TransferOwner() {
  const [ownerAddress, setOwnerAddress] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { data: hash, error: writeError, isPending, writeContract } = useWriteContract();

  async function transferOwner(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await writeContract({
        address: '0xc10a62a740A50BC9bd7c444bb98d3bA1FF888da0',
        abi: abi, 
        functionName: 'transferOwnership',
        args: [ownerAddress],
      });
    } catch (error:any) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  return (
    <>
      <div className={Traow.cont}>
        <h3>Transfer Owner</h3>
        {isError && <p className="error">{errorMessage}</p>}
        <form className="" onSubmit={transferOwner}>
          <input
            type="text"
            placeholder="New Owner Address"
            value={ownerAddress}
            onChange={(e) => setOwnerAddress(e.target.value)}
          />
          <button type="submit" disabled={isPending || isConfirming}>
            {isPending || isConfirming ? 'Confirming...' : 'Submit'}
          </button>
        </form>
      </div>
    </>
  );
}
