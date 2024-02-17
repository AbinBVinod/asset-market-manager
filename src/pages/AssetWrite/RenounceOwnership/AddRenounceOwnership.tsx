import Reow from "./AddRenOwn.module.css";
import { useWriteContract } from "wagmi";
import { abi } from "@/lib/Abi/Asset";
import { useState } from "react";
import { toast } from "sonner";

export default function RenounceOwnership() {
  const [isError, setIsError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const { data: hash, error: writeError, isPending, writeContract} = useWriteContract();

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

  const ToastShacn = () => {
    toast("Wait For MetaMask");
  };

  const ToastAndContract = () => {
    WriteRenounceOwner();
    ToastShacn();
  };

  return (
    <>
      <div className={Reow.main}>
        <h1> RenounceOwnership </h1>
        <button onClick={ToastAndContract}>Write</button>
      </div>
    </>
  );
}
