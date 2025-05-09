/* eslint-disable prettier/prettier */

import { Image } from "@heroui/image";

const FlexCard = ({data}) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Image height={100} width={1000} src={data.image}/>
      </div>
      <div className="flex-1">
        <h1>{data.title}</h1>
       
      </div>
    </div>
  );
};

export default FlexCard;
