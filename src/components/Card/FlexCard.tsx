
// import { Image } from "@heroui/image";
// import Link from "next/link";

// const FlexCard = ({data}:any) => {
//   return (
    
//     <Link href={`/news/${data?.id}`}>
//     <div className="flex gap-2 mt-2">
//      <div className="flex-1">
//         <Image height={100} width={100} src={data?.banner}/>
//       </div>
//       <div className="flex-1">
//         <h1>{data?.title}</h1>
//       </div>
//     </div>
//     </Link>
//   );
// };

// export default FlexCard;


import Image from "next/image";
import Link from "next/link";
import { FaClock } from "react-icons/fa";

const FlexCard = ({ data }: any) => {
  return (
    <Link href={`/news/${data?.id}`}>
      <div className="flex gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-lg transition-all cursor-pointer">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            height={80}
            width={130}
             src={data?.banner}
            // src="https://i.ibb.co/pvPshCy3/OIPfdff.webp"
            alt={data?.title || "খবরের ছবি"}
            className="rounded object-cover w-[130px] h-[80px]"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center flex-1">
          <h1 className="text-md font-semibold text-gray-800 dark:text-gray-100 line-clamp-2">
            {data?.title || "শিরোনাম পাওয়া যায়নি"}
          </h1>
          {/* Optional: তারিখ বা ক্যাটাগরি চাইলে এখানে দেখানো যাবে */}
          <div className="flex gap-2 items-center text-blue-500 dark:text-gray-400 mt-1">
            <p><FaClock/></p>
            <p className="text-sm  mt-1">{data?.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FlexCard;
