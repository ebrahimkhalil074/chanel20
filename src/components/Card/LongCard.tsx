
import { Card, CardHeader, CardBody,} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
const LongCard = (data:any) => {
console.log("LongCard data:", data);
  return (
    <div >
      <Link href={`/news/${data?.data?.id}`}>
      <Card className="">
       
        <CardBody className="overflow-visible ">
          <Image
            alt={data?.data?.title || "খবরের ছবি"}
            className="object-cover  rounded-xl border-2 border-red-500"
            src={data?.banner}
            height={200}
            width={300}
          
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start space-y-4">
          <p className="text-md uppercase font-bold">{data?.data?.title}</p>
          <h4 className="text-lg">{data?.data?.content}</h4>
        </CardHeader>
      </Card></Link>
    </div>
  );
};

export default LongCard;
