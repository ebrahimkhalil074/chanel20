
import Image from "next/image";
import Link from "next/link";

const ShortCard = ({data}:any) => {

  return (
   <div className=" p-1 shadow-md">
    <Link href={`/news/${data.id}`}>
    <div className=" ">
      <Image
      height={60}
      width={1000}
      src={data?.banner}
      alt={data?.title || "খবরের ছবি"}
/>
      <h1 >{data.title}...</h1>
    </div></Link>
   </div>
  );
};

export default ShortCard;