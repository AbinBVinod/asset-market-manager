import "./WriteManager.css";
import TransferOwner from "./TranferOwner/TransferOwner";
import AddCrypto from "./AddCrypto/Addcrypto";
import RenounceOwnership from "./RenounceOwnership/AddRenounceOwnership";

import Allwrite from "./AllWrite/Allwrite"

export default function WriteAssetsManager() {
  return (
    <>
      <>
        <div className="flex gap-3 flex-col   ">
          <h1 className="text-2xl font-bold text-white-800 mb-10 ml-4 mt-7 flex justify-center">
            Write Assets Manager
          </h1>
           <div className="flex justify-between ml-[100px] mr-[315px]">
           <Allwrite/>
           </div>
         
          {/* <div className="flex gap-4 flex-col ">

            <div>
              <TransferOwner />
            </div> 

            <div>
            <AddCrypto />
            </div>    

            <div>
            <RenounceOwnership />
            </div>
           
          </div> */}
        </div>
      </>
    </>
  );
}
