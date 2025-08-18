import { Image } from "@heroui/image";
import Link from "next/link";

const ImageCard = ({ data }: any) => {
  if (!data) return null;

  return (
    <Link href={`/news/${data.id}`}>
      <div className="relative w-full h-[px] rounded overflow-hidden shadow hover:shadow-md transition-all group">
        {/* Image */}
        <Image
          src='https://i.ibb.co/pvPshCy3/OIPfdff.webp'
          width={1000}
          className="object-cover w-full h-full"
          alt={data?.title || "খবরের ছবি"}
        />

        {/* Overlay Title Centered Inside Image */}
        <div className="absolute z-50 bottom-0 bg-black/40 flex items-center justify-center p-4 w-full rounded-lg">
          <h1 className="text-white text-center text-md font-semibold line-clamp-2 drop-shadow-md">
            {data?.title || "শিরোনাম পাওয়া যায়নি"}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;
