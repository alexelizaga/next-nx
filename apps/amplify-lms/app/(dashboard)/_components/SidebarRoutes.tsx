'use client';

import { Joystick, Layout, MonitorSmartphone, Sword } from 'lucide-react';

import SidebarItem from './SidebarItem';

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/'
  },
  {
    icon: Joystick,
    label: 'Products',
    href: '/products'
  },
  {
    icon: Sword,
    label: 'Genres',
    href: '/genre'
  },
  {
    icon: MonitorSmartphone,
    label: 'Platforms',
    href: '/platform'
  }
];

const SidebarRoutes = () => {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
