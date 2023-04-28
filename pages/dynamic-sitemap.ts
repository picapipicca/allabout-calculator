const getDate = new Date().toISOString();
const DOMAIN = "https://allcalculator.shop";
import { Amount } from "@prisma/client";
import useSWR from "swr";
interface AmountResponseProps {
    ok: boolean;
    amounts: Amount[];
  }

(async ()=>{
    const { data } = useSWR<AmountResponseProps>(`/api/amount`);
    let amountList = [];
    
})