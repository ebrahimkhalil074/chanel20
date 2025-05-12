// /* eslint-disable prettier/prettier */
// import { Image } from "@heroui/image";
// import Link from "next/link";
// import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

// import logo from '@/src/assets/footer-logo-4d56d219.png'
// import asLogo from '@/src/assets/get-it-on-apple-7e8352d9.png'
// import gpLogo from '@/src/assets/get-it-on-play-e9985150.png'
// const Footer = () => {
//   return (
//     <div className="text-white">
//       <div className='bg-gray-500 grid grid-cols-1 justify-center items-center py-4'>
//       <div className="flex justify-center items-center gap-5">
//         <Link href={`/home`}>Home</Link>
//         <Link href={`/video`}>Video</Link>
//         <Link href={`/program`}>Program</Link>
//         <Link href={`/archive`}>Archive</Link>
//         <Link href={`/news`}>News</Link>
//         <Link href={`/login`}>Login</Link>
//       </div>
//       <div className="flex justify-center items-center gap-5 ">
//         <Link href={`/home`}>Home</Link>
//         <Link href={`/video`}>Video</Link>
//         <Link href={`/program`}>Program</Link>
//         <Link href={`/archive`}>Archive</Link>
//         <Link href={`/news`}>News</Link>
//         <Link href={`/login`}>Login</Link>
//       </div>
//       </div>
//       {/*  */}
//       <div className="grid grid-flow-col justify-between items-center space-x-2 bg-red-400">
// <div className="h-full flex justify-center items-center ">
//   <Image height={100} src={logo.src} width={200} />
// </div>

// <div className="h-full flex justify-center items-center">
//   <div>
//   <h1>প্রধান উপদেষস্তাঃ এড সেলিম সরকার</h1>
//   <h1>সম্পাদকঃ সোহেল শিকদার জুমান</h1>
//   <h1>প্রকাশকঃ মোঃ ইসহাক</h1>
//   </div>
  
// </div>

// <div className="h-full flex justify-center items-center">
//  <p>প্রকাশিত সংবাদ,কলাম,তথ্য,ছবি,ইত্যাদি যথাযথ করথিপক্ষের অনুমতি ছাড়া ব্যবহার করা কপিরাইট আইনে দণ্ডনীয় অপরাধ। আনুমদন ছাড়া ব্যবহার পরিলক্ষিত হলে করতিপক্ষ যথাযথ আইনি ব্যবস্থা গ্রহন করবে। </p>
// </div>

// <div className=" h-full text-center items-center p-4">
//       <div className="flex justify-around  gap-6 mb-4 text-2xl text-gray-700">
//         <Link href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
//           <FaTwitter className="hover:text-blue-500 transition duration-200" />
//         </Link>
//         <Link href="https://instagram.com/" rel="noopener noreferrer" target="_blank">
//           <FaInstagram className="hover:text-pink-500 transition duration-200" />
//         </Link>
//         <Link href="https://facebook.com/" rel="noopener noreferrer" target="_blank">
//           <FaFacebookF className="hover:text-blue-700 transition duration-200" />
//         </Link>
//         <Link href="https://youtube.com/" rel="noopener noreferrer" target="_blank">
//           <FaYoutube className="hover:text-red-600 transition duration-200" />
//         </Link>
//         <Link href="https://linkedin.com/" rel="noopener noreferrer" target="_blank">
//           <FaLinkedinIn className="hover:text-blue-600 transition duration-200" />
//         </Link>
//       </div>

//       <h2 className="text-xl font-bold text-gray-800">Download Mobile App</h2>

//       <div className="flex justify-center  mt-4 text-2xl text-gray-700">
//       <Image src={asLogo.src} width={200} />
//       <Image src={gpLogo.src} width={200} />
//       </div>
//     </div>

//       </div>
//       <div className="bg-red-600 flex justify-between items-center p-4">
//         <div className="flex gap-2 ">
//           <h1>কপিরাইট ২০২৫ সকল স্বত্ব www.channeltwenty.com স্নরক্ষিত।</h1>
//           <Link href='yyt'>আমাদের সম্পর্কে।</Link>
//           <Link href='yyyyy'>গোপনীয়তা নীতি।</Link>
//           <Link href='yyyy'>Admin</Link>
//         </div>
//         <div>
//           <h1>Developed by Code Cursor</h1>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import { Image } from "@heroui/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import logo from "@/src/assets/footer-logo-4d56d219.png";
import asLogo from "@/src/assets/get-it-on-apple-7e8352d9.png";
import gpLogo from "@/src/assets/get-it-on-play-e9985150.png";

const Footer = () => {
  return (
    <div className="text-white text-sm">
      {/* Top Navigation Links */}
      <div className="bg-gray-500 py-4 space-y-4">
  <div className="flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm">
    <Link href="/home" className="hover:text-red-500">Home</Link>
    <Link href="/video" className="hover:text-red-500">Video</Link>
    <Link href="/program" className="hover:text-red-500">Program</Link>
    <Link href="/archive" className="hover:text-red-500">Archive</Link>
    <Link href="/news" className="hover:text-red-500">News</Link>
    <Link href="/login" className="hover:text-red-500">Login</Link>
  </div>
  <div className="flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm">
    <Link href="/news/category/জাতীয়" className="hover:text-red-500">জাতীয়</Link>
    <Link href="/news/category/বাংলাদেশ" className="hover:text-red-500">বাংলাদেশ</Link>
    <Link href="/news/category/অর্থনীতি" className="hover:text-red-500">অর্থনীতি</Link>
    <Link href="/news/category/আন্তর্জাতিক" className="hover:text-red-500">আন্তর্জাতিক</Link>
    <Link href="/news/category/খেলাধুলা" className="hover:text-red-500">খেলাধুলা</Link>
    <Link href="/news/category/অপরাধ" className="hover:text-red-500">অপরাধ</Link>
    <Link href="/video" className="hover:text-red-500">ভিডিও</Link>
  </div>
</div>


      {/* Middle Section */}
      <div className="bg-red-400 px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <Image height={100} src={logo.src} width={200} />
        </div>

        {/* Editors Info */}
        <div className="text-center md:text-left space-y-1">
          <h1>প্রধান উপদেষ্তাঃ এড সেলিম সরকার</h1>
          <h1>সম্পাদকঃ সোহেল শিকদার জুমান</h1>
          <h1>প্রকাশকঃ মোঃ ইসহাক</h1>
        </div>

        {/* Copyright Warning */}
        <div className="text-justify px-2">
          <p>
            প্রকাশিত সংবাদ, কলাম, তথ্য, ছবি ইত্যাদি যথাযথ কর্তৃপক্ষের অনুমতি
            ছাড়া ব্যবহার করা কপিরাইট আইনে দণ্ডনীয় অপরাধ। অনুমতি ছাড়া ব্যবহার
            পরিলক্ষিত হলে কর্তৃপক্ষ যথাযথ আইনি ব্যবস্থা গ্রহণ করবে।
          </p>
        </div>

        {/* Social & App */}
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-4 text-2xl text-gray-700">
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-500" />
            </Link>
            <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </Link>
            <Link href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-blue-700" />
            </Link>
            <Link href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-red-600" />
            </Link>
            <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-blue-600" />
            </Link>
          </div>
          <h2 className="text-lg font-semibold text-white mb-2">Download Mobile App</h2>
          <div className="flex justify-center  gap-2">
            <Image src={asLogo.src} width={160} />
            <Image src={gpLogo.src} width={160} />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-600 flex flex-col md:flex-row justify-between items-center px-4 py-3 text-xs md:text-sm space-y-2 md:space-y-0">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start text-center">
          <p>কপিরাইট ২০২৫ সকল স্বত্ব www.channeltwenty.com সুরক্ষিত।</p>
          <Link href="/about">আমাদের সম্পর্কে</Link>
          <Link href="/privacy">গোপনীয়তা নীতি</Link>
          <Link href="/admin">Admin</Link>
        </div>
        <div className="text-center">
          <p>Developed by Code Cursor</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
