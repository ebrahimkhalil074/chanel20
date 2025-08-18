
'use client'

import Tag from "../Tag";
import FlexCard from "../Card/FlexCard";
import MiddleCard from "../Card/MiddleCard";
import { useGetAllArticale } from "@/src/hooks/articale.hook";



const Section4 = () => {
  
 
const { data:allNewsData,  } = useGetAllArticale('শিক্ষা ও বিজ্ঞান');

        const allNews = allNewsData?.data ?? [];
  
const { data:sportsData,  } = useGetAllArticale('খেলা');

        const sports = sportsData?.data ?? [];
      
const { data:finiceData,  } = useGetAllArticale('অর্থনীতি');

        const finice = finiceData?.data ?? [];
      
  return (
    <div className="grid grid-cols-12 gap-4 p-4 min-h-screen ">
      {/* First Div - 25% */}
      <div className="col-span-12 lg:col-span-3">
       <Tag tag='শিক্ষা , বিজ্ঞান ও প্রযুক্তি'/>

       <div className="grid grid-cols-1 gap-2 ">
             {allNews?.slice(0,5).map((item:any) => (
               <FlexCard key={item.id} data={item} />
             ))}
           </div>
    
      </div>

      {/* Middle Div - 50% */}
      <div className="col-span-12 lg:col-span-6 ">
        
        <div className="mb-2">
         <Tag tag='খেলাধুলা'/>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-2">
          
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {sports.slice(0,9).map((item:any) => (
                <MiddleCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Last Div - 25% */}
      <div className="col-span-12 lg:col-span-3">
      <Tag tag='অর্থনীতি'/>
      <div className="grid grid-cols-1 gap-2 ">
             {finice?.slice(0,5).map((item:any) => (
               <FlexCard key={item.id} data={item} />
             ))}
           </div>
      </div>
    </div>
  );
};

export default Section4;
