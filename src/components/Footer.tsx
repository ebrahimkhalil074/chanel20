/* eslint-disable prettier/prettier */
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className='bg-gray-300 '>
      <div className="flex justify-center items-center gap-5 h-20">
        <Link href={`/home`}>Home</Link>
        <Link href={`/video`}>Video</Link>
        <Link href={`/program`}>Program</Link>
        <Link href={`/archive`}>Archive</Link>
        <Link href={`/news`}>News</Link>
        <Link href={`/login`}>Login</Link>
      </div>
      <div className="flex justify-center items-center gap-5 ">
        <Link href={`/home`}>Home</Link>
        <Link href={`/video`}>Video</Link>
        <Link href={`/program`}>Program</Link>
        <Link href={`/archive`}>Archive</Link>
        <Link href={`/news`}>News</Link>
        <Link href={`/login`}>Login</Link>
      </div>
      </div>
      {/*  */}
      <div>

      </div>
    </div>
  );
};

export default Footer;
