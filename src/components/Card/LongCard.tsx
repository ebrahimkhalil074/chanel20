/* eslint-disable prettier/prettier */
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
const LongCard = () => {
  return (
    <div>
      <Card className="py-4">
       
        <CardBody className="overflow-visible h-full w-full py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://heroui.com/images/hero-card-complete.jpeg"
           height={200}
          width={1000}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio Frontend Radio Frontend Radio Frontend Radio Frontend Radio</h4>
        </CardHeader>
      </Card>
    </div>
  );
};

export default LongCard;
