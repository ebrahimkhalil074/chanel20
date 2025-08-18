// "use client";

// import { useState } from "react";
// import { Image } from "@heroui/image";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaGithub,
//   FaDownload,
// } from "react-icons/fa";

// import bannerImg from "@/src/assets/banner-logo-45db0059.png";
// import scannerImg from "@/src/assets/qr-scanning-22cb3eea.gif";
// import socalmedia from "@/src/assets/social-media-3ea23533.png";

// const Banner = () => {
//   const [showScanner, setShowScanner] = useState(false);

//   return (
//     <div className="container mx-auto relative bg-gradient-to-r from-white via-red-600 to-white flex items-center justify-center py-6 px-4 overflow-hidden">
//       {/* Banner Image */}
//       <div className="z-10">
//         <Image alt="Hero Banner" src={bannerImg.src} width={600} />
//       </div>

//       {/* Desktop View */}
//       <div className="hidden md:flex flex-row-reverse absolute w-full top-0 left-0 h-full justify-between items-center px-8">
//         {/* QR Section */}
//         <div className="text-black font-semibold text-center w-[200px] p-4">
//           <h2 className="mb-2 mr-6 text-lg">App Download</h2>
//           <Image alt="QR Scanner" src={scannerImg.src} width={150} />
//         </div>

//         {/* Social Media Section */}
//         <div className="bg-white bg-opacity-70 p-6 rounded-xl shadow-md text-center">
//           <div className="flex justify-center gap-6 mb-4 text-2xl text-gray-700">
//             <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
//               <FaTwitter className="hover:text-blue-500 transition" />
//             </a>
//             <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
//               <FaInstagram className="hover:text-pink-500 transition" />
//             </a>
//             <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
//               <FaGithub className="hover:text-black transition" />
//             </a>
//           </div>
//           <h2 className="text-lg font-bold text-gray-800">Follow Us</h2>
//           <div className="flex justify-center gap-6 mt-4 text-2xl text-gray-700">
//             <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
//               <FaFacebookF className="hover:text-blue-700 transition" />
//             </a>
//             <a href="https://youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
//               <FaYoutube className="hover:text-red-600 transition" />
//             </a>
//             <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
//               <FaLinkedinIn className="hover:text-blue-600 transition" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="md:hidden absolute inset-0 flex flex-col justify-start items- p-4 z-20">
//         {/* Social Media Vertical Icons */}
//         <Image src={socalmedia.src} width={100} alt="Social Media Icons" />

//         {/* QR Toggle Button */}
//         <div className="self-end mt-4 text-right">
//           <button
//             onClick={() => setShowScanner(!showScanner)}
//             className="text-black px-4 py-2 rounded-md text-sm font-medium"
//           >
//            {showScanner ? (
//               "Hide QR"
//             ) : (
//               <div className="flex gap-2">
//                 App <FaDownload size={20} />
//               </div>
//             )}
//           </button>
//           {showScanner && (
//             <div className="mt-2">
//               <Image alt="QR Scanner" src={scannerImg.src} width={80} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;



// "use client";

// import { useState } from "react";
// import { Image } from "@heroui/image";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaGithub,
//   FaDownload,
// } from "react-icons/fa";

// import bannerImg from "@/src/assets/banner-logo-45db0059.png";
// import scannerImg from "@/src/assets/qr-scanning-22cb3eea.gif";
// import socalmedia from "@/src/assets/social-media-3ea23533.png";
// import { useGetAllSocialMedia } from "@/src/hooks/social.hook";
// import Link from "next/link";

// const Banner = () => {
//   const [showScanner, setShowScanner] = useState(false);
//   const iconMap: Record<string, React.ElementType> = {
//   facebook: FaFacebookF,
//   twitter: FaTwitter,
//   instagram: FaInstagram,
//   youtube: FaYoutube,
//   linkedin: FaLinkedinIn,
//   github: FaGithub,
// };
// const {data,isLoading} = useGetAllSocialMedia();
// if(isLoading){
//   return <h1>loading ...</h1>
// }
// console.log(data)
// const midIndex = Math.ceil(data.length / 2);
//   return (
//     <div className="relative w-full bg-gradient-to-r from-white via-red-600 to-white py-6 px-4 overflow-hidden">
//       {/* Banner Image (Center Main Content) */}
//       <div className="flex justify-center z-10">
//         <Image alt="Hero Banner" src={bannerImg.src} width={600} />
//       </div>

//       {/* Desktop View */}
//       <div className="hidden md:flex flex-row-reverse absolute top-0 left-0 w-full h-full justify-between items-center px-8">
//         {/* QR Section */}
//         <div className="text-black font-semibold text-center items-center w-[200px] p-4">
//           <h2 className="mb-2 text-lg">App Download</h2>
//           <Image alt="QR Scanner" src={scannerImg.src} width={130} />
//         </div>

//         {/* Social Media Section */}
//         <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md text-center">
//           <div className="flex justify-center gap-6 mb-4 text-2xl text-gray-700">
//             { 
//               data.slice(0,midIndex).map((item)=>{
//                 const i = iconMap[item.platform];
//                 return( 
//                   <Link key={item.id} href={item.link} aria-label={item.platform} target="_blank" rel="noopener noreferrer">
//                < i />
//             </Link>
//                 )
//               })
//              }
            
//           </div>
//           <h2 className="text-lg font-bold text-gray-800">Follow Us</h2>
//           <div className="flex justify-center gap-6 mt-4 text-2xl text-gray-700">
//             <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
//               <FaFacebookF className="hover:text-blue-700 transition" />
//             </a>
//             <a href="https://youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
//               <FaYoutube className="hover:text-red-600 transition" />
//             </a>
//             <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
//               <FaLinkedinIn className="hover:text-blue-600 transition" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="md:hidden absolute inset-0 flex justify-between items-center px-4 z-20">
//         {/* Left: Social Media Icon Image */}
//         <div>
//           <Image src={socalmedia.src} width={80} alt="Social Media Icons" />
//         </div>

//         {/* Right: App Download Button + QR */}
//         <div className="text-right">
//           <button
//             onClick={() => setShowScanner(!showScanner)}
//             className="flex items-center gap-2 text-black px-4 py-2 rounded-md text-sm font-medium bg-white/80 shadow"
//           >
//             {showScanner ? "Hide QR" : <>App <FaDownload size={16} /></>}
//           </button>

//           {showScanner && (
//             <div className="mt-2 flex justify-end">
//               <Image alt="QR Scanner" src={scannerImg.src} width={80} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;


"use client";

import { useState } from "react";
import { Image } from "@heroui/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaDownload,
  FaQuestionCircle,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTiktok, SiSnapchat } from "react-icons/si";

import bannerImg from "@/src/assets/banner-logo-45db0059.png";
import scannerImg from "@/src/assets/qr-scanning-22cb3eea.gif";
import socalmedia from "@/src/assets/social-media-3ea23533.png";
import { useGetAllSocialMedia } from "@/src/hooks/social.hook";
import Link from "next/link";
import { FaX } from "react-icons/fa6";

const iconMap: Record<string, React.ElementType> = {
  facebook: FaFacebookF,
  twitter: FaX,
  instagram: FaInstagram,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  tiktok: SiTiktok,
  snapchat: SiSnapchat,
};

const getPlatformIcon = (platform: string) => {
  const key = platform.toLowerCase();
  return iconMap[key] || FaQuestionCircle;
};

const Banner = () => {
  const [showScanner, setShowScanner] = useState(false);
  const { data = [], isLoading } = useGetAllSocialMedia();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  const midIndex = Math.ceil(data.length / 2);

  return (
    <div className="container mx-auto relative w-full bg-gradient-to-r from-white via-red-600 to-white py-6 px-4 overflow-hidden">
      <div className="flex justify-center z-10">
        <Image alt="Hero Banner" src={bannerImg.src} width={600} />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-row-reverse absolute top-0 left-0 w-full h-full justify-between items-center px-8">
        {/* QR Section */}
        <div className="text-black font-semibold text-center items-center w-[200px] p-4">
          <h2 className="mb-2 text-sm mr-10">App Download</h2>
          <Image alt="QR Scanner" src={scannerImg.src} width={130} />
        </div>

        {/* Social Media Section */}
        <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md text-center">
          <div className="flex justify-center gap-6 mb-4 text-2xl text-gray-700">
            {data.slice(0, midIndex).map((item) => {
              const Icon = getPlatformIcon(item.platform);
              return (
                <Link
                  key={item.id}
                  href={item.link}
                  aria-label={item.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>

          <h2 className="text-lg font-bold text-gray-800">Follow Us</h2>

          <div className="flex justify-center gap-6 mt-4 text-2xl text-gray-700">
            {data.slice(midIndex).map((item) => {
              const Icon = getPlatformIcon(item.platform);
              return (
                <Link
                  key={item.id}
                  href={item.link}
                  aria-label={item.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden absolute inset-0 flex justify-between items-center px-4 z-20">
        <div>
          <Image src={socalmedia.src} width={80} alt="Social Media Icons" />
        </div>

        <div className="text-right">
          <button
            onClick={() => setShowScanner(!showScanner)}
            className="flex items-center gap-2 text-black px-4 py-2 rounded-md text-sm font-medium bg-white/80 shadow"
          >
            {showScanner ? "Hide QR" : <><span>App</span> <FaDownload size={16} /></>}
          </button>

          {showScanner && (
            <div className="mt-2 flex justify-end">
              <Image alt="QR Scanner" src={scannerImg.src} width={80} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
