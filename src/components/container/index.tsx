import React from 'react';

type Props = {
  children: React.ReactElement | React.ReactElement[]
}

const Container = ({children}: Props) => {
  return (
    <div className='flex max-w-screen-xl mx-auto mt-6 justify-center'>
      {children}
    </div>
  );
};

export default Container;