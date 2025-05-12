/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

"use client";
import { Image } from "@heroui/image";
import { useState } from "react";

import SmallCard from "./Card/SmallCard";
import Tag from "./Tag";
import FlexCard from "./Card/FlexCard";
import Slider2 from "./Slider2";
const NewsDetails = ({data}:{data:any}) => {
const dessData =[
  {
    "id": 1,
    "title": "ঢাকায় ভারী বৃষ্টিপাত, জনদুর্ভোগ চরমে",
    "summary": "রাজধানী ঢাকায় টানা বৃষ্টির কারণে বিভিন্ন সড়কে পানি জমে যানজটের সৃষ্টি হয়েছে।",
    "description": "আজ সকাল থেকে শুরু হওয়া বৃষ্টিপাতে ঢাকার প্রধান সড়কগুলোতে পানি জমে গেছে। এতে যান চলাচলে ব্যাঘাত ঘটেছে এবং অফিসগামী মানুষকে চরম দুর্ভোগে পড়তে হয়েছে। আবহাওয়া অধিদপ্তর জানিয়েছে, আগামী ২৪ ঘণ্টায় আরও বৃষ্টির সম্ভাবনা রয়েছে।",
    "category": "আবহাওয়া",
    "date": "2025-05-09T10:00:00+06:00",
    "image": "https://heroui.com/images/hero-card-complete.jpeg"
  },
  {
    "id": 2,
    "title": "বাংলাদেশ টি-২০ সিরিজে জয় লাভ করেছে",
    "summary": "শেষ ম্যাচে দুর্দান্ত পারফরম্যান্সের মাধ্যমে সিরিজ নিজেদের করে নিয়েছে বাংলাদেশ দল।",
    "description": "তিন ম্যাচের টি-২০ সিরিজে ২-১ ব্যবধানে জয় পেয়েছে বাংলাদেশ। শেষ ম্যাচে সৌম্য সরকার ও মুস্তাফিজুর রহমান দুর্দান্ত খেলেছেন। ম্যাচ শেষে অধিনায়ক জানান, এটি দলের আত্মবিশ্বাস বৃদ্ধিতে বড় ভূমিকা রাখবে।",
    "category": "খেলাধুলা",
    "date": "2025-05-08T18:30:00+06:00",
    "image": "https://heroui.com/images/hero-card-complete.jpeg"
  },
  {
    "id": 3,
    "title": "বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার ফল প্রকাশ",
    "summary": "আজ দুপুর ১২টায় ঢাকা বিশ্ববিদ্যালয়ের ২০২৫ শিক্ষাবর্ষের ভর্তি পরীক্ষার ফলাফল প্রকাশিত হয়েছে।",
    "description": "ঢাকা বিশ্ববিদ্যালয়ের 'ক' ইউনিটের ফলাফল প্রকাশ হয়েছে। মোট ৪৫ হাজার পরীক্ষার্থীর মধ্যে ৭ হাজার ৫০০ জন উত্তীর্ণ হয়েছে। শিক্ষার্থীরা বিশ্ববিদ্যালয়ের ওয়েবসাইটে গিয়ে ফলাফল দেখতে পারবেন।",
    "category": "শিক্ষা",
    "date": "2025-05-07T12:00:00+06:00",
    "image": "https://heroui.com/images/hero-card-complete.jpeg"
  },
  {
    "id": 4,
    "title": "আইটি খাতে রপ্তানি আয় নতুন রেকর্ড গড়েছে",
    "summary": "২০২৫ সালের প্রথম প্রান্তিকে আইটি রপ্তানি আয়ে ২৫% প্রবৃদ্ধি দেখা গেছে।",
    "description": "বাংলাদেশের আইটি খাতে রপ্তানি আয় বেড়ে দাঁড়িয়েছে ৫০০ মিলিয়ন ডলারে। এই প্রবৃদ্ধির জন্য প্রধান অবদান রেখেছে ফ্রিল্যান্সিং, সফটওয়্যার সার্ভিস এবং বিজনেস প্রসেস আউটসোর্সিং (BPO)। সরকার এই সাফল্যে সন্তোষ প্রকাশ করেছে।",
    "category": "অর্থনীতি",
    "date": "2025-05-06T09:15:00+06:00",
    "image": "https://heroui.com/images/hero-card-complete.jpeg"
  },
  {
    "id":6,
    "title": "ঈদ উপলক্ষে ট্রেনের অগ্রিম টিকিট বিক্রি শুরু",
    "summary": "আজ সকাল ৮টা থেকে ঈদের ট্রেনের টিকিট বিক্রি শুরু হয়েছে কমলাপুর রেলস্টেশনে।",
    "description": "কমলাপুর স্টেশনে ট্রেনের টিকিট কিনতে ভোর থেকে মানুষ লাইনে দাঁড়িয়েছে। বিভিন্ন গন্তব্যের টিকিট দ্রুত শেষ হয়ে যাচ্ছে। বাংলাদেশ রেলওয়ে জানিয়েছে, টিকিট বিক্রির জন্য অতিরিক্ত কাউন্টার খোলা হয়েছে এবং অনলাইনে টিকিট বিক্রিও চলবে।",
    "category": "জাতীয়",
    "date": "2025-05-05T08:00:00+06:00",
    "image": "https://heroui.com/images/hero-card-complete.jpeg"
  }
]

  const [active, setActive] = useState('first');
  const filteredData =
  active === 'first'
    ? [...dessData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // সর্বশেষ
    : [...dessData].sort((a, b) => b.id - a.id); // জনপ্রিয়


  return (
    <div>
      <div className="grid grid-cols-12 gap-4  ">
      
      {/* frist Div - 50% */}
     
      <div className="col-span-12 lg:col-span-8 ">

       <div className="border-1 p-2">
       <h1>{data.category}</h1>
        <h1 className="text-3xl">{data.title}</h1>
        <div className="flex justify-between items-center">
        <div>
          <h1>{data.author}</h1>
          <h1>{data.date.split('T')[0]}</h1>
          </div>
      <div>
        facebook
      </div>
     </div>
       </div>
     {/* done */}
     <div>
      <Image alt="image" src={data.image}/>
     </div>
     <div className="border-1 space-y-2 pt-2">
    <p className="text-xl font-medium">{data.summary}</p>
    <p>{data.description}</p>
     </div>
      </div>
    {/* Last Div - 50% */}
      <div className="col-span-12 lg:col-span-4">
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
      filteredData.map(item => <SmallCard key={data.id} data={item}/>)
    }
   </div>
</div>
{/* slider */}
<div>
  <Slider2 />
</div>
{/* aro sonbad */}
<div className="mt-4">
  <Tag tag='আরও সংবাদ'/>
</div>
<div>
  <h1>hi</h1>
  {
    dessData.map(item => <FlexCard key={item.id}data={item} />)
  }
</div>

       
     </div>
    </div>
    </div>
  );
};

export default NewsDetails;