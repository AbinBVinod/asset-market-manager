"use client"
import asid from "./Assetsalchain.module.css";

import { useEffect, useState } from "react";
import { getAllowedChainid } from "@/components/ReadAssets/allowedChainid/Allowedchainid";

const Allowedchain = () => {
  const [allowedchainId, setallowedchainId] = useState();
  const [argsValue, setArgsvalue] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      const count: any = await getAllowedChainid(argsValue);
      setallowedchainId(count);
    };

    fetchData();
  },[argsValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setArgsvalue(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <>
      <div className={asid.main}>
        <input type="number" value={argsValue} 
         onChange={handleInputChange}
         placeholder="Enter Chainid number"
        />
        <h1>AllowedchainId : {allowedchainId} </h1>
      </div>
    </>
  );
};

export default Allowedchain;