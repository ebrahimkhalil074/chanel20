

import { Image } from "@heroui/image";
import Link from "next/link";

const ShortCard = ({data}:any) => {

  return (
   <div className=" p-1 shadow-md">
    <Link href={`/news/${data.id}`}>
    <div className=" ">
      <Image height={80} width={1000} src={'https://i.ibb.co/pvPshCy3/OIPfdff.webp'}
/>
      <h1 >{data.title.slice()}...</h1>
    </div></Link>
   </div>
  );
};

export default ShortCard;