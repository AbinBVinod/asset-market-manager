import s from "./AssetsCount.module.css";

import { useEffect, useState } from "react";
import { getAssetCount } from "../../../components/ReadAssets/Assetid/Asset";

const AssetsCount = () => {
  const [assetCount, setAssetCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const count: any = await getAssetCount();
      setAssetCount(count);
    };
    fetchData();
  });

  return (
    <>
      <div className={s.acc}>
        <div className={s.asc}>
          <h3>Asset Count :</h3>
          {assetCount}
        </div>
      </div>
    </>
  );
};
export default AssetsCount;
