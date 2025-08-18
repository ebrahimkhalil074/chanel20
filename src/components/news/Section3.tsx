'use client'

import LongCard from "../Card/LongCard";
import ShortCard from "../Card/ShortCard";
import Tag from "../Tag";
import FlexCard from "../Card/FlexCard";


import SmallCard from "../Card/SmallCard";
import { useState } from "react";
import { Button } from "@heroui/button";
import { useGetAllArticale } from "@/src/hooks/articale.hook";



const Section3 = () => {
  const [active, setActive] = useState('সর্বশেষ')
  const { data:electionData, isLoading } = useGetAllArticale('নির্বাচন সংবাদ');

      const election= electionData?.data ?? [];
      console.log({election})
    const { data:newsData, isLoading:iIsLoading } = useGetAllArticale('আন্তর্জাতিক');

      const news = newsData?.data ?? [];
      const { data:allNews,  } = useGetAllArticale(undefined);

        const allNewsData = allNews?.data ?? [];
      
  
  const filteredData =
  active === 'সর্বশেষ'
    ? [...allNewsData].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // সর্বশেষ
    : [...allNewsData].sort((a, b) => b.likes.length - a.likes.length); // জনপ্রিয়


  return (
    <div className="grid grid-cols-12 gap-4 p-4  min-h-screen">
      {/* সর্বশেষ Div - 25% */}
      <div className="col-span-12 lg:col-span-3">
        <Tag tag='নির্বাচন সংবাদ'/>
        <div>
        <div className="grid grid-cols-1 gap-2 ">
             {election?.slice(0,7).map((item:any)=> (
               <FlexCard key={item.id} data={item} />
             ))}
           </div>
        </div>
        

        
      </div>

      {/* Middle Div - 50% */}
      <div className="col-span-12 lg:col-span-6 ">
        <div className="mb-2">
         <Tag tag='নিউজ'/>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="flex-1 ">
           {  news.length > 0 && <LongCard key={news[0].id} data={news[0]} />}
          </div>
          <div className="flex-1 ">
            <div className="">
              {news.slice(1,6).map((item:any) => (
                <ShortCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Last Div - 25% */}
      <div className="col-span-12 lg:col-span-3">
      
      <div>
<div className="flex justify-evenly items-center">
      <Button
        className={`cursor-pointer p-2 w-full h-full text-center flex items-center justify-center border 
        ${active === 'সর্বশেষ' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
        onClick={() => setActive('সর্বশেষ')}
      >
        সর্বশেষ
      </Button>

     
      <Button
        className={`cursor-pointer p-2 w-full h-full text-center flex items-center justify-center border 
        ${active === 'জনপ্রিয়' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
        onClick={() => setActive('জনপ্রিয়')}
      >
        জনপ্রিয়
      </Button>
    </div>
   <div className="flex flex-col gap-4">
   {
      filteredData.slice(0,7).map(item => <SmallCard key={item.id} data={item}/>)
    }
   </div>
</div>
      </div>
    </div>
  );
};

export default Section3;
