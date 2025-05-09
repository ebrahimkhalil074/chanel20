/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// /* eslint-disable prettier/prettier */
// 'use client'
// import { Image } from "@heroui/image";
// import Slider2 from "../Slider2";

// import img from "@/src/assets/banner-logo-45db0059.png";
// import LongCard from "../Card/LongCard";
// import ShortCard from "../Card/ShortCard";

// const Section1 = () => {

// const slideData = [
//   { id: 1, title: "Slide 1", image: img.src },
//   { id: 2, title: "Slide 2", image: img.src },
//   { id: 3, title: "Slide 3", image: img.src },
// ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 h-screen">
//       <div className=" ">
//       <div className="bg-red-600 inline-block text-white px-2 py-1 text-sm font-semibold">CHANNEL TWENTY</div>

//     <div className="flex-grow border-t-2 border-red-600 ml-1" />

//     <div className="h-[150px] border-2 p-2">
//         <h1>hello</h1>
//       </div>
//        <div className="h-full w-full ">

//        <Slider2 />
//        </div>
//       </div>
//       {/* middle div */}
//       <div className="">
//       <div className="bg-red-600 inline-block text-white px-2 py-1 text-sm font-semibold">CHANNEL TWENTY</div>
//       <div className="flex-grow border-t-2 border-red-600 ml-1" />
// <div>
//     <Image src={img.src}/>
// </div>

// <div>
// <div className="bg-red-600 inline-block text-white px-2 py-1 text-sm font-semibold">আন্তর্জাতিক</div>
// <div className="flex-grow border-t-2 border-red-600 ml-1" />
// </div>

// <div>
//     {/* first */}
//     <div className="flex ">
// <div className="flex-1">
// <LongCard />
// </div>
// <div className="flex-1">
// <div className="grid grid-cols-2 gap-2 w-full h-full">
// {
//     slideData.map(item => <ShortCard key={item.id} data={item}/>)
// }
// </div>
// </div>

//     </div>
//     {/* last */}
//     <div>

//     </div>
// </div>

//       </div>
//       <div className=" ">
//       <div className="bg-red-600 inline-block text-white px-1 py-1 text-sm font-semibold">CHANNEL TWENTY</div>
//       <div className="flex-grow border-t-2 px-1 border-red-600 ml-1" />
//       </div>
//     </div>
//   );
// };

// export default Section1;

/* eslint-disable prettier/prettier */
'use client'

import LongCard from "../Card/LongCard";
import ShortCard from "../Card/ShortCard";
import Tag from "../Tag";
import FlexCard from "../Card/FlexCard";

import img from "@/src/assets/banner-logo-45db0059.png";
import SmallCard from "../Card/SmallCard";
import { useState } from "react";



const Section3 = () => {
  const slideData = [
    { id: 1, title: "Slide 1", image: img.src },
    { id: 2, title: "Slide 2", image: img.src },
    { id: 3, title: "Slide 3", image: img.src },
  ];
const [active, setActive] = useState('first');
  const filteredData =
  active === 'first'
    ? [...slideData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // সর্বশেষ
    : [...slideData].sort((a, b) => b.id - a.id); // জনপ্রিয়

  return (
    <div className="grid grid-cols-12 gap-4 p-4 ">
      {/* First Div - 25% */}
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
      <Tag tag='সামাজিক মিডিয়া'/>
      <div>
<div className="flex justify-evenly items-center">
      <h1
        className={`cursor-pointer p-4 w-full h-full text-center flex items-center justify-center border 
        ${active === 'first' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
        onClick={() => setActive('first')}
      >
        ফার্স্ট
      </h1>

     
      <h1
        className={`cursor-pointer p-4 w-full h-full text-center flex items-center justify-center border 
        ${active === 'second' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
        onClick={() => setActive('second')}
      >
        সেকেন্ড
      </h1>
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
