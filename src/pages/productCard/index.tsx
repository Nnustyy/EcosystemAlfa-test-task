import { Card, CardBody, CardHeader, Image } from '@heroui/react';
import React from 'react';

type Props = {
  price?:number,
  title?:string,
  image?:string | string[]
}


const ProductCard = ({price, title, image}:Props) => {
  return (
    <Card className='py-4'>
      <CardHeader className='overflow-visible py-2'>
      <Image
      alt='product photo'
      className='object-cover rounded-xl'
      width={270}
      src={image}
      
      />
      </CardHeader>
      <CardBody className='pb-0 pt-2 px-4 flex-col items-start'>
    <h4 className="font-bold text-large">{title}</h4>
    <p className="text-tiny uppercase font-bold">${price}</p>
      </CardBody>
    </Card>
  );
};

export default ProductCard;