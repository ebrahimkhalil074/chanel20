import Marquee from "react-fast-marquee";

type NewsItem = {
  title: string;
};

interface MarqueProps {
  data: NewsItem[];
  title: string;
}

export default function Marque({ data, title }: MarqueProps) {
  return (
    <div className="flex items-center bg-red-100 text-red-800  border-b border-red-300 ">
      {/* Fixed label */}
  
 <div className="relative inline-block text-center ">
      <div className="bg-red-600 text-white p-2 text-sm font-bold  ">
        {title} :
      </div>
      <div
        className="absolute top-0 right-0 w-0 h-0 border-t-[18px] border-t-transparent border-b-[19px] border-b-transparent border-l-[16px] border-l-red-600"
        style={{ top: '0', right: '-16px' }}
       />
    </div>
      {/* Scrolling text */}
      <div className="flex-1 overflow-hidden">
        <Marquee pauseOnHover gradient={false} speed={50}>
          {data?.map((item, index) => (
            <span key={index} className="mx-6">
              {item.title}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
