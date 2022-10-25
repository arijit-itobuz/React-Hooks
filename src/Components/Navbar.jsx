import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../Lib/Routes/routes';

export default function Navbar() {
  return (
    <>
      <header className='text-gray-400 bg-gray-900 body-font'>
        <div className='container flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link to={routes.home.fullPath} className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
            <span className='ml-3 text-xl'>React Hooks</span>
          </Link>
          <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center'>
            <Link to={routes.useStatePage.fullPath} className='mr-5 hover:text-white cursor-pointer'>useState</Link>
            <Link to={routes.useEffectPage.fullPath} className='mr-5 hover:text-white cursor-pointer'>useEffect</Link>
            <Link to={routes.useRefPage.fullPath} className='mr-5 hover:text-white cursor-pointer'>useRef</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
