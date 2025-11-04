import React, { useEffect } from 'react';
import { useGetProductsQuery } from '../../app/services/api';

const ProductsList = () => {

const {data} = useGetProductsQuery();

  useEffect(() => {
    console.log(data)
  },[data])

  return (
    <div>
      ProductsList
    </div>
  );
};

export default ProductsList;