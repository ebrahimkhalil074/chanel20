 
'use client'

import LongCard from "../Card/LongCard";
import ShortCard from "../Card/ShortCard";
import Tag from "../Tag";
import ImageCard from "../Card/ImageCard";
import FlexCard from "../Card/FlexCard";

import img from "@/src/assets/banner-logo-45db0059.png";

const Section2 = () => {
  const slideData = [
    { id: 1, title: "Slide 1", image: img.src },
    { id: 2, title: "Slide 2", image:" https://heroui.com/images/hero-card-complete.jpeg" },
    { id: 3, title: "Slide 2", image:" https://heroui.com/images/hero-card-complete.jpeg" },
    { id: 4, title: "Slide 2", image:" https://heroui.com/images/hero-card-complete.jpeg" },
    { id: 5, title: "Slide 3", image: img.src },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 p-4 ">
      
      {/* frist Div - 50% */}
     
      <div className="col-span-12 lg:col-span-6 ">
      <Tag tag='সামাজিক মিডিয়া'/>
      <div className="flex flex-col lg:flex-row gap-2 mt-2">
         <div className="flex-1">
          <div className="grid grid-cols-1 gap-4">
            {
              slideData?.slice(0,3).map(item =><ImageCard key={item.id} data={item}/>)
            }
          </div>
      
         </div>
         <div className="flex-1">
           <div className="grid grid-cols-1 gap-2 ">
             {slideData.map((item) => (
               <FlexCard key={item.id} data={item} />
             ))}
           </div>
         </div>
       </div>
      </div>
    {/* Last Div - 50% */}
      <div className="col-span-12 lg:col-span-6 p-2">
       
       <div className="mb-2">
        <Tag tag='জাতীয়'/>
       </div>

       {/* Content Grid */}
       <div className="flex flex-col lg:flex-row gap-2">
         <div className="flex-1">
           <LongCard />
         </div>
         <div className="flex-1">
           <div className="grid grid-cols-2 gap-2 ">
             {slideData.map((item) => (
               <ShortCard key={item.id} data={item} />
             ))}
           </div>
         </div>
       </div>
     </div>
    </div>
  );
};

export default Section2;
