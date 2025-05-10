/* eslint-disable prettier/prettier */
// pages/videos/[category].js

'use client'

import { useParams, useRouter, useSearchParams } from 'next/navigation';

const CategoryVideos = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {category} = useParams();
  console.log(category)
  const videos=[]

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center capitalize mb-6">
        {category} Videos
      </h2>

      {videos.length === 0 ? (
        <p className="text-center">এই ক্যাটাগরিতে কোনো ভিডিও নেই।</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div key={index}>
              <iframe
                allowFullScreen
                className="w-full h-64"
                src={video.src}
                title={video.title}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryVideos;
