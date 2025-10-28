import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
  <div className="text-center mt-10">
    <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to='/products'>Смотреть продукты</Link>
  </div>
  );
};

export default PageNotFound;