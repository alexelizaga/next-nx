'use client';

import Image from 'next/image';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { IoSearchOutline, IoPersonOutline } from 'react-icons/io5';
import NavbarItem from './navbar-item';

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
    icon: IoSearchOutline,
    href: '/search'
  },
  {
    icon: LiaShoppingBagSolid,
    href: '/cart'
  },
  {
    icon: IoPersonOutline,
    href: '/account'
  }
];

const Navbar = () => {
  return (
    <nav className="bg-white py-2 px-14 relative border-b-2">
      <div className="container flex items-center">
        <div className="flex mr-[40px]">
          <Image width={100} height={45.45} src="logo.svg" alt="Logo" />
        </div>
        <div className="flex flex-grow justify-between">
          <div className="hidden sm:flex items-center gap-7">
            {routes1.map((route) => (
              <NavbarItem key={route.href} {...route} />
            ))}
          </div>
          <div className="flex items-center gap-6">
            {routes2.map((route) => (
              <NavbarItem key={route.href} {...route} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
