'use client';

import { Skeleton } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marque from "../Marque";


export default function LiveVideoSection({ liveVideoData, newsItems, logo }) {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    // Optional: Set video loading false after a delay or on video ready (iframe load event can't be reliably used)
    const timer = setTimeout(() => setIsVideoLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen">
        {/* Video Skeleton */}
        {isVideoLoading && (
          <Skeleton className="w-full h-full rounded-none" />
        )}

        {/* Video iframe */}
        {!isVideoLoading && (
          <iframe
            allowFullScreen
            className="w-full h-full"
            src={liveVideoData?.video_url}
            title={liveVideoData?.title}
          />
        )}

        {/* Top-right Logo with Skeleton */}
        <div className="absolute top-2 right-2 w-[100px] h-[100px] bg-blue-500 rounded-full z-10 flex justify-center items-center">
          <Skeleton isLoaded={!isImageLoading} className="rounded-full w-[60px] h-[60px]">
            <Image
              src={logo.src}
              alt="Logo"
              height={60}
              width={60}
              onLoadingComplete={() => setIsImageLoading(false)}
            />
          </Skeleton>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white py-2">
          <Marque data={newsItems} title="সংবাদ" />
        </div>
      </div>

      {/* Below Ad Image with Skeleton */}
      <div className="mt-10 w-full max-w-4xl mx-auto">
        <Skeleton isLoaded={!isImageLoading} className="rounded-lg w-full h-[200px]">
          <Image
            alt="Hero Image"
            src="https://www.pollfish.com/wp-content/uploads/2017/12/Mobile_AD_FORMATS3-1.png"
            width={800}
            height={200}
            className="w-full h-auto"
            onLoadingComplete={() => setIsImageLoading(false)}
          />
        </Skeleton>
      </div>
    </>
  );
}
