
import { Image } from "@heroui/image";
import Link from "next/link";

const FlexCard = ({data}:any) => {
  return (
    
    <Link href={`/news/${data.id}`}>
    <div className="flex gap-2 mt-2">
     <div className="flex-1">
        <Image height={100} width={1000} src={data.image}/>
      </div>
      <div className="flex-1">
        <h1>{data.title}</h1>
      </div>
    </div>
    </Link>
  );
};

export default FlexCard;
