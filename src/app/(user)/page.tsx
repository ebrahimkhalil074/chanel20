 'use client'
import { Image } from "@heroui/image";

import Marque from "@/src/components/Marque";

import logo from '../../assets/footer-logo-4d56d219.png'
import { useGetAllArticale } from "@/src/hooks/articale.hook";
import { useGetLiveVideo } from "@/src/hooks/live.hook";
import LiveVideoSection from "@/src/components/skeleton/LiveVideoSkeleton";
import MarqueAll from "@/src/components/marqueAll";
const HomePage = () => {
  
const {data} =useGetAllArticale(undefined);
const newsItems =data?.data?.slice(0,10)
const {data:liveVideoData,isLoading} = useGetLiveVideo(undefined);
  return (
    <div className="mt-2">
     {
      isLoading? <LiveVideoSection liveVideoData={liveVideoData} newsItems={newsItems} logo={logo}/>:
       <>
       <div className="relative w-full h-screen">
            {/* Video */}
            <iframe
              allowFullScreen
              className="w-full h-full"
              src={liveVideoData?.video_url}
              title={liveVideoData?.title} />
            {/* Top-right box */}
            <div className="absolute top-2 right-2 w-[100px] h-[100px] bg-blue-500 rounded-full z-10 flex justify-center items-center">
              <Image src={logo.src} height='60px' />

            </div>
            {/* Marquee Overlay */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white py-2">
              <Marque data={newsItems} title="সংবাদ" />
            </div>
          </div><div className="mt-10">
              <Image
                alt="Hero Image"
                src="https://www.pollfish.com/wp-content/uploads/2017/12/Mobile_AD_FORMATS3-1.png" />
            </div>
            </>
     }
    </div>
  );
};

export default HomePage;
