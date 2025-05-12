

import { Image } from "@heroui/image";
import Link from "next/link";

const ShortCard = ({data}:any) => {
    

  return (
   <div>
    <Link href={`/news/${data.id}`}>
    <div className="shadow-md mt-2 ">
      <Image height={150} src={data.image}
/>
      <h1 >{data.title.slice(0,50)}</h1>
    </div></Link>
   </div>
  );
};

export default ShortCard;