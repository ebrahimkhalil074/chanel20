/* eslint-disable prettier/prettier */

import { Image } from "@heroui/image";

const ShortCard = ({data}) => {
    

  return (
    <div className="shadow-md mt-2 ">
      <Image height={150} src={data.image}
/>
      <h1 >{data.title.slice(0,50)}</h1>
    </div>
  );
};

export default ShortCard;