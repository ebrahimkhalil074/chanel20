import Filtering from "@/src/components/Filtering";
import Section1 from "@/src/components/news/Section1";
import Slider from "@/src/components/Slider";
import img from "@/src/assets/banner-logo-45db0059.png";
import Section2 from "@/src/components/news/Section2";
import Section3 from "@/src/components/news/Section3";
import Section4 from "@/src/components/news/Section4";

/* eslint-disable prettier/prettier */
const NewsPage = () => {


const slideData = [
  { id: 1, title: "Slide 1", image: img.src },
  { id: 2, title: "Slide 2", image: img.src },
  { id: 3, title: "Slide 3", image: img.src },
  { id: 4, title: "Slide 4", image: img.src },
  { id: 5, title: "Slide 5", image: img.src },
];

  return (
    <div>
        <Filtering />
        <Slider  slideData={slideData}/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default NewsPage;