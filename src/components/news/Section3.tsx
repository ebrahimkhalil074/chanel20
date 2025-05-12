'use client'

import LongCard from "../Card/LongCard";
import ShortCard from "../Card/ShortCard";
import Tag from "../Tag";
import FlexCard from "../Card/FlexCard";

import img from "@/src/assets/banner-logo-45db0059.png";
import SmallCard from "../Card/SmallCard";
import { useState } from "react";
import { Button } from "@heroui/button";



const Section3 = () => {
  const slideData = [
    { id: 1, title: "Slide 1", image: img.src },
    { id: 2, title: "Slide 2", image: img.src },
    { id: 3, title: "Slide 3", image: img.src },
  ];
const [active, setActive] = useState('সর্বশেষ');
// id poribote date
  const filteredData =
  active === 'সর্বশেষ'
    ? [...slideData].sort((a, b) => new Date(b.id).getTime() - new Date(a.id).getTime()) // সর্বশেষ
    : [...slideData].sort((a, b) => b.id - a.id); // জনপ্রিয়

  return (
    <div className="grid grid-cols-12 gap-4 p-4 ">
      {/* সর্বশেষ Div - 25% */}
      <div className="col-span-12 lg:col-span-3">
        <Tag tag='নির্বাচন সংবাদ'/>
        <div>
        <div className="grid grid-cols-1 gap-2 ">
             {slideData.map((item) => (
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
          <div className="flex-1 h-[350px]">
            <LongCard />
          </div>
          <div className="flex-1 h-[350px]">
            <div className="grid grid-cols-2 gap-2 ">
              {slideData.map((item) => (
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
      filteredData.map(item => <SmallCard key={item.id} data={item}/>)
    }
   </div>
</div>
      </div>
    </div>
  );
};

export default Section3;
