
'use client'
import FlexCard from "@/src/components/Card/FlexCard";
import SmallCard from "@/src/components/Card/SmallCard";
import Slider2 from "@/src/components/Slider2";
import Tag from "@/src/components/Tag";
import {  Button, Image } from "@heroui/react";
import { useParams } from "next/navigation";
import { useState } from "react";

import add2 from "@/src/assets/add2.jpg"
import MiddleCard from "@/src/components/Card/MiddleCard";
import { useGetAllArticale } from "@/src/hooks/articale.hook";

const Page = () => {
  const [active, setActive] = useState('সর্বশেষ');
  const {category} =useParams()
  const query =decodeURIComponent(category as string);
  console.log(query)
  const {data:allData}=useGetAllArticale(undefined )
  console.log({allData})
 
  const {data:dynamicQueryData,isLoading:dayloding}=useGetAllArticale(query)
  if (dayloding) {
    return <h1>loding...</h1>
  }
  console.log(dynamicQueryData)
const daynamicData =dynamicQueryData?.data
 console.log(daynamicData)

  const filteredData =
  active === 'সর্বশেষ'
    ? [...daynamicData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // সর্বশেষ
    : [...daynamicData].sort((a, b) => a.id - b.id); // জনপ্রিয়
  return (
    <div className="grid grid-cols-12 gap-4">
   <div className="col-span-12">
   <Tag tag={decodeURIComponent(category as string)} />
   </div>
  
    {/* Image Section */}
    <div className="col-span-12 lg:col-span-8">
      <div className="relative w-full  rounded overflow-hidden">
        <Image
          src={daynamicData[1].image}
          alt={daynamicData[1].title}
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 z-10">
          <h1 className="text-lg font-semibold text-center">{daynamicData[1].title}</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {
          daynamicData?.map(item => <FlexCard key={item.id} data={item}/>)
        }
      </div>
      {/* add */}
<div>
  <Image width={1000} src={add2.src} />
</div>
{/*  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
        {
          daynamicData?.map(item => <MiddleCard key={item.id} data={item}/>)
        }
      </div>
    </div>
  
    {/* Right Section */}
    <div className="col-span-12 lg:col-span-4">
    <div className="col-span-12">
   <Tag tag='সর্বাধিক পঠিত'/>
   </div>
    <div className="grid grid-cols-1 gap-4 mt-4 ">
             {daynamicData?.map((item) => (
               <FlexCard key={item.id} data={item} />
             ))}
           </div>
<div className="my-4 mr-8">
  <Slider2 />
</div>

<div className="flex justify-evenly items-center">
      <Button
        className={`cursor-pointer p-4 w-full h-full text-center flex items-center justify-center border 
        ${active === 'সর্বশেষ' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
        onClick={() => setActive('সর্বশেষ')}
      >
        সর্বশেষ
      </Button>

     
      <Button
        className={`cursor-pointer p-4 w-full h-full text-center flex items-center justify-center border 
        ${active === 'জনপ্রিয়' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
        onClick={() => setActive('জনপ্রিয়')}
      >
        জনপ্রিয়
      </Button>
    </div>
    <div className="flex flex-col gap-4">
   {
      filteredData?.map(item => <SmallCard key={item.id} data={item}/>)
    }
   </div>


    </div>
  </div>
  
  );
};

export default Page;