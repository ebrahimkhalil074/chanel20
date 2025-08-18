'use client'
import Filtering from "@/src/components/Filtering";
import Section1 from "@/src/components/news/Section1";
import Slider from "@/src/components/Slider";
import img from "@/src/assets/banner-logo-45db0059.png";
import Section2 from "@/src/components/news/Section2";
import Section3 from "@/src/components/news/Section3";
import Section4 from "@/src/components/news/Section4";
import { useGetAllArticale } from "@/src/hooks/articale.hook";


const NewsPage = () => {


const {data} = useGetAllArticale(undefined)
const slideData =data?.data.slice(0,10)
const { data:nationalData, isLoading } = useGetAllArticale('জাতীয়');
const national = nationalData?.data
  
  return (
    <div>
        <Filtering />
        <Slider  slideData={slideData}/>
      <Section1  national={national} isLoading={isLoading}/>
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default NewsPage;