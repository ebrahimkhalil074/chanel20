/* eslint-disable prettier/prettier */
import {Card, CardFooter, Image, Button, } from "@heroui/react";
import Link from "next/link";
const ImageCard = ({data}) => {
  return (
    <div>
     <Link href={`/news/${data.id}`} >
     <Card isFooterBlurred className="border-none" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        src={data.image}
        height={180}
        width={1000}
      />
      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-left text-white">{data.title.slice(0,100)}</p>
      </CardFooter>
    </Card></Link>
    </div>
  );
};

export default ImageCard;