import { useEffect, useState } from "react"
import GMRE from "./minliqreqexe.module.css"
import {getMLiqReqExe} from "@/components/ReadAssets/LiquidityExecution/GetMinLiquidityRequiredForExecution"
import { Input } from "@/components/ui/input"


const GetMinLiquidityRequiredForExecution = () => {
     const [gmlrfe , setGmlrfe] = useState<Number | undefined >();
    const [argsValue ,setArgsValue] = useState<number | string>();
    
    useEffect(() => {
        const fetchData = async () => {
         try {
            if(argsValue !== ""){
                const isliqreqexc:any = await getMLiqReqExe(argsValue);
                setGmlrfe(isliqreqexc)
            } else {
                setGmlrfe(undefined)
            }
         }
         catch{

         }
        }
        fetchData();
    },[argsValue])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArgsValue(Number(event.target.value));
    };
   

 return (
    <>
    <div className={GMRE.main}>
        <Input
         type="number"
         placeholder="enter number"
         value={argsValue}
         onChange={handleInputChange}
       />
        <h1>MinLiquidityRequiredForExecution : {gmlrfe !== undefined ? gmlrfe.toString() : "Unknown"}</h1>
    </div>    
    </>
 )
}
export default GetMinLiquidityRequiredForExecution;