import { useEffect, useState } from "react";
import own from "./Owner.module.css";
import { getOwner } from "@/components/ReadAssets/Owner/owner";

const Owner = () => {
  const [getowner, setGetowner] = useState("0x");

  useEffect(() => {
    try {
      const getOwnerVaule: any = getOwner();
      setGetowner(getOwnerVaule);
    } catch (error) {
      console.log("failed to fetch:", error);
      throw error;
    }
  });

  return (
    <>
      <div className={own.main}>Owner : {getowner}</div>
    </>
  );
};
export default Owner;
