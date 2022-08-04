import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex font-sans items-center flex-wrap bg-lightPink p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            
            <span className='text-2xl text-white font-bold tracking-wide'>
            blossom
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-red-300 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='font-sans lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/learn'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-semibold items-center justify-center hover:bg-red-300 hover:text-white'>
                data
              </a>
            </Link>
            <Link href='/generator'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-semibold items-center justify-center hover:bg-red-300 hover:text-white'>
                generator
              </a>
            </Link>
            <Link href='/resources'>
              <a className='lg:inline-flex lg:w-auto w-full px-2 py-2 rounded text-white font-semibold items-center justify-center hover:bg-red-300 hover:text-white'>
                resources
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};