 
'use client'

import LongCard from "../Card/LongCard";
import ShortCard from "../Card/ShortCard";
import Tag from "../Tag";
import ImageCard from "../Card/ImageCard";
import { useGetAllArticale } from "@/src/hooks/articale.hook";



const Section2 = () => {
  const { data:crimeData, isLoading } = useGetAllArticale('অপরাধ');

    const crime = crimeData?.data ?? [];
    console.log('crime',crime)
  const { data:internationalData, isLoading:iIsLoading } = useGetAllArticale('আন্তর্জাতিক');

    const international = internationalData?.data ?? [];
   
 console.log({international})

  return (
    <div className="grid grid-cols-12 gap-4 py-2">
      
      {/* frist Div - 50% */}
     
      <div className="col-span-12 lg:col-span-6 ">
      <Tag tag='অপরাধ'/>
      
      <div className="flex flex-col lg:flex-row gap-2 mt-2">
         <div className="flex-1">
          <div className="grid grid-cols-1 gap-4">
            {
              crime?.slice(0,3).map((item:any) =><ImageCard key={item.id} data={item}/>)
            }
          </div>
      
         </div>
         <div className="flex-1">
           <div className="grid grid-cols-2 gap-2 ">
             {crime?.slice(3,9)?.map((item:any) => (
               <ShortCard key={item.id} data={item} />
             ))}
           </div>
         </div>
       </div>
      </div>
    {/* Last Div - 50% */}
      <div className="col-span-12 lg:col-span-6 p-2">
       
       <div className="mb-2">
        <Tag tag='আন্তর্জাতিক'/>
       </div>

       {/* Content Grid */}
       <div className="flex flex-col lg:flex-row gap-2">
         <div className="flex-1">
       {  international.length > 0 && <LongCard key={international[0].id} data={international[0]} />}
         </div>
         <div className="flex-1">
           <div className="">
             {international?.slice(1,5)?.map((item:any) => (
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
