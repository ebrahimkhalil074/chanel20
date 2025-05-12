"use client";
import { useRouter } from "next/router";
 

const Latest = () => {
  const videoData = [
    {
      title: "বাংলাদেশের সুন্দরবন",
      src: "https://www.youtube.com/embed/dxW0XU_zd0k",
    },
    {
      title: "Dhaka City Drone View",
      src: "https://www.youtube.com/embed/l0U7SxXHkPY",
    },
    {
      title: "History of Bengali Language",
      src: "https://www.youtube.com/embed/yfS61DUnMD0",
    },
    {
      title: "Padma Bridge Documentary",
      src: "https://www.youtube.com/embed/ZQZAToKQTeM",
    },
    {
      title: "Learn JavaScript in Bangla",
      src: "https://www.youtube.com/embed/PkZNo7MFNFg",
    },
    {
      title: "Bangladesh Cricket Highlights",
      src: "https://www.youtube.com/embed/PblwTVvhpc4",
    },
  ];

  const router = useRouter();
  const latest = videoData.slice(0, 3); // শুধু ৩টা দেখাও

  return (
    <div>
      <div className="text-center m-5">
        <h2 className="text-2xl font-bold">
          Latest News From <span className="text-red-600">Chanal 20</span>
        </h2>
        <p className="w-[600px] mx-auto text-black">
          <i>
            Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power
          </i>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {latest.map((video, index) => (
          <div key={index} className="mb-4">
            <iframe
              allowFullScreen
              className="w-full h-64"
              src={video.src}
              title={video.title}
            />
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => router.push("/video/category")}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded"
        >
          সব দেখুন
        </button>
      </div>
    </div>
  );
};

export default Latest;
