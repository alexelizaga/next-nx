'use client';

import Image from 'next/image';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { IoSearchOutline } from 'react-icons/io5';
import NavbarItem from './navbar-item';
import FavoriteButton from './favorite-button';

const routes1 = [
  {
    label: 'Dashboard',
    href: '/'
  },
  {
    label: 'Browse',
    href: '/search'
  }
];

const routes2 = [
  {
    icon: LiaShoppingBagSolid,
    href: '/'
  },
  {
    icon: IoSearchOutline,
    href: '/search'
  }
];

const Navbar = () => {
  return (
    <nav className="bg-white py-2 px-4 md:px-14 relative border-b-2">
      <div className="flex items-center">
        <div className="flex mr-10">
          <Image width={100} height={45.45} src="logo.svg" alt="Logo" />
        </div>
        <div className="flex flex-grow justify-end sm:justify-between">
          <div className="hidden sm:flex items-center gap-7">
            {routes1.map((route) => (
              <NavbarItem key={route.href} {...route} />
            ))}
          </div>
          <div className="flex">
            <div className="sm:hidden flex items-center gap-6 mr-4">
              {routes2.map((route) => (
                <NavbarItem key={route.href} {...route} />
              ))}
            </div>
            <FavoriteButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
