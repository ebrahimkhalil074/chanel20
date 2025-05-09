/* eslint-disable prettier/prettier */
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

const MiddleCard = ({data}) => {
  return (
    <div>
       <Link href={`/news/${data.id}`}>
       <div className="shadow-md mt-2">
      <Image  src={data?.image}/>
      <h1 className="font-bold">{data?.title.slice(0,25)}...</h1>
      <p>{data?.date.slice(0,10)}</p>
    </div>
       </Link>
    </div>
  );
};

export default MiddleCard;