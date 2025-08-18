'use client'
import { useGetAllArticale } from "../hooks/articale.hook";
import Marque from "./Marque";

const MarqueAll = () => {
  const {data} =useGetAllArticale(undefined);

 const newsItems =data?.data.slice(0,10)||[]
  return (
    <div>
       <Marque title='সর্বশেষ সংবাদ' data={newsItems} />
    </div>
  );
};

export default MarqueAll;