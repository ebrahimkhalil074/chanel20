
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

const MiddleCard = ({data}:any) => {
  return (
    <div className="h-[150px]">
       <Link href={`/news/${data.id}`}>
       <div className=" h-full w-full">
     <div className="w-full">
       <Image  height={80} width={1000} src={'https://i.ibb.co/pvPshCy3/OIPfdff.webp'}/>
     </div>
      <h1 className="font-bold">{data?.title.slice(0,20)}...</h1>
      <p>{data?.date.slice(0,10)}</p>
    </div>
       </Link>
    </div>
  );
};

export default MiddleCard;