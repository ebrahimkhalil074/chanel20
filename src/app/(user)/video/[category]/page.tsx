
'use client'

import { useParams, } from 'next/navigation';

const CategoryVideos = () => {
  // const router = useRouter();
  // const searchParams = useSearchParams();
  const {category} = useParams();

  const videos=[
    {
      id:1,
      videoUrl:'',
      title:""
    },
    {
      id:1,
      videoUrl:'',
      title:""
    },
    {
      id:1,
      videoUrl:'',
      title:""
    }
  ]

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
                src={video.videoUrl}
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
