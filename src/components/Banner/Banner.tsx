/* eslint-disable prettier/prettier */
import { Image } from "@heroui/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa';

import bannerImg from "@/src/assets/banner-logo-45db0059.png";
import scannerImg from "@/src/assets/qr-scanning-22cb3eea.gif";

const Banner = () => {
  

// const socialMedia = [
//   {
//     name: 'Facebook',
//     link:"jgj",
//     icon: <FaFacebookF />,
//   },
//   {
//     name: 'Twitter',
//     link:"jgj",
//     icon: <FaTwitter />,
//   },
//   {
//     name: 'Instagram',
//     link:"jgj",
//     icon: <FaInstagram />,
//   },
//   {
//     name: 'LinkedIn',
//     link:"jgj",
//     icon: <FaLinkedinIn />,
//   },
//   {
//     name: 'YouTube',
//     link:"jgj",
//     icon: <FaYoutube />,
//   },
//   {
//     name: 'GitHub',
//     link:"jgj",
//     icon: <FaGithub />,
//   },
// ];

  return (
    <div className="  bg-gradient-to-r from-white via-red-600 to-white flex items-center justify-center relative">
      <div >
        <Image
          alt="Hero Image"
          src={bannerImg.src} 
          width={600}
        />
      </div>
      <div className="w-full h-full absolute md:flex flex-row-reverse justify-between items-center hidden">
        <div className="text-white text-center w-[200px] h-full p-4">
            <h2>App Download</h2>
        <Image
          alt="Scenner Image"
          src={scannerImg.src} 
          width={150}
        />
        </div>

        {/* <div className="text-white  ">
        
        <div className="grid grid-cols-3 bg-red-500 gap-2">

  {socialMedia.map((media, index) => (
    <div key={index} className="text-xl cursor-pointer">
      <Link href={media?.link}>
      <div >
        {media.icon}
        </div>
      </Link>
    </div>
  ))}
</div>

            </div> */}
            <div className="bg-gradient-to-r from-white to-pink-200 p-6 rounded-xl text-center ">
      <div className="flex justify-center gap-6 mb-4 text-2xl text-gray-700">
        <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
          <FaTwitter className="hover:text-blue-500 transition duration-200" />
        </a>
        <a href="https://instagram.com/" rel="noopener noreferrer" target="_blank">
          <FaInstagram className="hover:text-pink-500 transition duration-200" />
        </a>
        <a href="https://wa.me/" rel="noopener noreferrer" target="_blank">
          <FaGithub className="hover:text-green-500 transition duration-200" />
        </a>
      </div>

      <h2 className="text-xl font-semibold text-gray-800">Follow Us</h2>

      <div className="flex justify-center gap-6 mt-4 text-2xl text-gray-700">
        <a href="https://facebook.com/" rel="noopener noreferrer" target="_blank">
          <FaFacebookF className="hover:text-blue-700 transition duration-200" />
        </a>
        <a href="https://youtube.com/" rel="noopener noreferrer" target="_blank">
          <FaYoutube className="hover:text-red-600 transition duration-200" />
        </a>
        <a href="https://linkedin.com/" rel="noopener noreferrer" target="_blank">
          <FaLinkedinIn className="hover:text-blue-600 transition duration-200" />
        </a>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Banner;
