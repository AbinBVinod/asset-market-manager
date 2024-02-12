import "./WriteManager.css";
import TransferOwner  from "./TranferOwner/TransferOwner";
import   AddCrypto  from "./AddCrypto/Addcrypto"
import RenounceOwnership from "./RenounceOwnership/AddRenounceOwnership";


export default function WriteAssetsManager() {
  return (
    <>
      <>
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-2xl font-bold text-white-800 mb-4 ml-4 mt-7">
            Write Assets Manager
          </h1>

          <TransferOwner />
          <AddCrypto />
          <RenounceOwnership/>
        </div>
      </>
    </>
  );
}


