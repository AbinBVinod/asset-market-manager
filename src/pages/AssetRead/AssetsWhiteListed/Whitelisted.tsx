import { useEffect, useState } from "react";
import isWl from "./Whitelisted.module.css"; 
import { getisWhiteListedasset } from "@/components/ReadAssets/whitelisted/WhitelistedId";
import { Input } from "@/components/ui/input"

const IsWhiteListed = () => {
    const [isWhitelisted, setIsWhitelisted] = useState<boolean | undefined>();
    const [argsValue, setArgsValue] = useState<number | "">();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (argsValue !== "") {
                    const isWhitelistedValue: any = await getisWhiteListedasset(argsValue!);
                    setIsWhitelisted(isWhitelistedValue);
                } else {
                    setIsWhitelisted(undefined); 
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [argsValue]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArgsValue(Number(event.target.value));
    };

    return (
        <>
            <div className={isWl.main}>
                <Input
                    type="number"
                    placeholder="enter id"
                    value={argsValue || ""}
                    onChange={handleInputChange}
                />
                <h1>WhiteListed : {isWhitelisted !== undefined ? isWhitelisted.toString() : "Unknown"}</h1>
            </div>
        </>
    );
};

export default IsWhiteListed;
