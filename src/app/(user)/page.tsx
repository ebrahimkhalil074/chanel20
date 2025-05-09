/* eslint-disable prettier/prettier */
import { Image } from "@heroui/image";

import Marque from "@/src/components/Marque";
const HomePage = () => {
  const newsItems = [
    { title: "দেশজুড়ে বইমেলা শুরু হচ্ছে আগামী সপ্তাহে " },
    { title: "ভারতের সঙ্গে নতুন বাণিজ্য চুক্তি স্বাক্ষরিত" },
    { title: "ঢাকায় আজ বৃষ্টি হতে পারে" },
    { title: "বিশ্বকাপে বাংলাদেশের পরবর্তী খেলা শুক্রবার" },
    { title: "ই-কমার্স নীতিমালা চূড়ান্ত করেছে সরকার" },
  ];

  return (
    <div className=" mt-10">
      <div className="relative w-full h-screen">
        {/* Video */}
        <iframe
          allowFullScreen
          className="w-full h-full"
          src="https://www.youtube.com/embed/19g66ezsKAg"
          title="YouTube video"
        />
        {/* Top-right box */}
        <div className="absolute top-2 right-2 w-[100px] h-[100px] bg-blue-500 rounded-full z-10 flex justify-center items-center">
          <h1>channel 20</h1>
        </div>
        {/* Marquee Overlay */}
        <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white py-2">
          <Marque data={newsItems} title="সংবাদ" />
        </div>
      </div>
      <div className="mt-10">
        <Image
          alt="Hero Image"
          src="https://www.pollfish.com/wp-content/uploads/2017/12/Mobile_AD_FORMATS3-1.png"
        />
      </div>
    </div>
  );
};

export default HomePage;
