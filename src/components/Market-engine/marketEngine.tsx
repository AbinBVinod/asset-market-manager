import Meng from "./MarketEngine.module.css";
import Link from "next/link";

const MarketEnginer = () => {
  return (
    <>
      <div className={Meng.main}>
        <span></span>
        <h1> Market-Engine</h1>
        <div className={Meng.readwrite}>
          <Link href={"/marketread"}>
            <button>Read</button>
          </Link>

          <Link href={"/marketwrite"}>
            <button>Write</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default MarketEnginer;
