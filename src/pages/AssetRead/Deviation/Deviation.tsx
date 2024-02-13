import De from "./Deviaton.module.css";
import { Input } from "@/components/ui/input";
import { getDeviationdata } from "@/components/ReadAssets/deviation/deviationdata";
import { useEffect, useState } from "react";

const Deviaton = () => {
  const [deviationData, setDeviationData] = useState({
    referencePrice: "",
    maxDeviationPercentage: ""
  });
  const [argsValue, setArgsValue] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const deviationData: any = await getDeviationdata(argsValue);
        setDeviationData(deviationData);
      } catch (error) {
        console.log("Deviation not working", error);
        throw error;
      }
    };
    fetchData();
  }, [argsValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArgsValue(Number(event.target.value));
  };

  return (
    <div className={De.main}>
      <h1>Deviation:</h1>
      <Input
        type="number"
        placeholder="Enter number"
        value={argsValue}
        onChange={handleInputChange}
      />
      <div className={De.child}>
        <div>Reference Price: {deviationData.referencePrice}</div>
        <div>Max Deviation Percentage: {deviationData.maxDeviationPercentage}</div>
      </div>
    </div>
  );
};

export default Deviaton;
